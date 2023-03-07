const { PostService, CategoryService } = require('../services');

const createPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { id } = req.user;
  // Obtém as categorias por Ids
    const exists = await Promise.all(
      categoryIds.map(async (categoryId) => {
        const category = await CategoryService.getByCategoryId(categoryId);
        return !!category;
      })
    ).then((result) => result.every((value) => value));  // Verifica se todas as categorias foram encontradas
    if (!exists) {
      return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    };
  
  // Cria o post
  const blogPost = await PostService.createPost(title, content, id); 
  // Associa as categorias ao post
    const postCategories = categoryIds.map((category) => ({ postId: blogPost.id, categoryId: category }));
    await PostService.createPostCategories(postCategories);
  // Retorna os dados do post criado
    const data = {
      id: blogPost.id,
      title,
      content,
      userId: id,
      updated: blogPost.updated,
      published: blogPost.published,
    }
    res.status(201).json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  createPost,
};