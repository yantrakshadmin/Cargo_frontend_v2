import { SignInScreen } from '../screens/public/SignIn.screen';
import { SignUpShipperScreen } from '../screens/public/signUpShipper.screen';
import { SignUpSupplierScreen } from '../screens/public/SignUpSupplier.screen';

export const publicRoutes = [
  {
    name: 'Sign In',
    Component: SignInScreen,
  },
  {
    name: 'Sign Up Shipper',
    Component: SignUpShipperScreen,
  },
  {
    name: 'Sign Up Supplier',
    Component: SignUpSupplierScreen,
  },
];
