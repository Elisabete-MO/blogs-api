const { PostService, CategoryService } = require('../services');

const ERROR_NOT_FOUND_CATEGORY = 'one or more "categoryIds" not found';

const existsCategory = async (categoryIds) => Promise.all( // Obtém as categorias por Ids
  categoryIds.map(async (categoryId) => {
    const category = await CategoryService.getByCategoryId(categoryId);
    return !!category;
}),
).then((result) => result.every((value) => value)); // Verifica se todas as categorias foram encontradas

const createPostCategories = async (blogPost, categoryIds) => {
  const postCategories = categoryIds
    .map((category) => ({ postId: blogPost.id, categoryId: category })); // Associa as categorias ao post
  await PostService.createPostCategories(postCategories); 
};

const createPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { id } = req.user;
    const exists = await existsCategory(categoryIds); 
    if (!exists) return res.status(400).json({ message: ERROR_NOT_FOUND_CATEGORY });
    const blogPost = await PostService.createPost(title, content, id); // Cria o post
    createPostCategories(blogPost, categoryIds);
    res.status(201).json(blogPost);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getAllPosts = async (_req, res) => {
  const allPosts = await PostService.getAllPosts();
  res.status(200).json(allPosts);
};

const getByPostId = async (req, res) => {
  const { id } = req.params;
  const post = await PostService.getByPostId(id);
  if (!post) return res.status(404).json({ message: 'Post does not exist' });
  res.status(200).json(post);
};

const editByPostId = async (req, res) => {
  const userId = req.user.id;
  const { id } = req.params;
  const { title, content } = req.body;
  const post = await PostService.getByPostId(id);
  if (post.userId !== userId) return res.status(401).json({ message: 'Unauthorized user' });
  if (!post) return res.status(404).json({ message: 'Post does not exist' });
  await PostService.editByPostId(id, { title, content });
  const editedPost = await PostService.getByPostId(id);
  res.status(200).json(editedPost);
};

module.exports = {
  createPost,
  getAllPosts,
  getByPostId,
  editByPostId,
};