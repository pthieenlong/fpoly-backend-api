import express from 'express';
import userRoute from './User.route';
import authRoute from './Auth.route';
import cartRoute from './Cart.route';
import categoryRoute from './Category.route';
import productRoute from './Product.route';

const mainRouter = express.Router();

mainRouter.use('/user', userRoute);
mainRouter.use('/auth', authRoute);
mainRouter.use('/cart', cartRoute);
mainRouter.use('/category', categoryRoute);
mainRouter.use('/product', productRoute);
export default mainRouter;
