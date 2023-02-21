import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import MainLayouts from "../Layouts/MainLayouts";
import Login from "../Components/Auth/Login/Login";
import Register from "../Components/Auth/Register/Register";
import Statement from "../Dashboard/UserDashboard/Statements/Statement/Statement";
import UserDasboard from "../Dashboard/UserDashboard/UserDashboard/UserDasboard";
import UserDashboardLayout from "../Layouts/UserDashboardLayout";
import AllBats from "../Dashboard/UserDashboard/Statements/AllBats/AllBats";
import AllDeposite from "../Dashboard/UserDashboard/Statements/AllDeposite/AllDeposite";
import BalanceTransfer from "../Dashboard/UserDashboard/Statements/BalanceTransfer/BalanceTransfer";
import AllWidrow from "../Dashboard/UserDashboard/Statements/AllWidrow/AllWidrow";
import TransactionHistory from "../Dashboard/UserDashboard/Statements/TransactionHistory/TransactionHistory";
import FinanceMain from "../Dashboard/UserDashboard/Finance/FinanceMain/FinanceMain.jsx/FinanceMain";
import Deposit from "../Dashboard/UserDashboard/Finance/Deposite/Deposit";
import BalanceTrans from "../Dashboard/UserDashboard/Finance/BalanceTrans/BalanceTrans";
import Withdraw from "../Dashboard/UserDashboard/Finance/Withdraw/Withdraw";
import ChangeClub from "../Dashboard/UserDashboard/Finance/ChangeCLub/ChangeClub";
import Allsponsor from "../Dashboard/UserDashboard/AllSponsor/AllSponsor";
import AdminDashboardLayout from "../Layouts/AdminDashboardLayout";
import AdminDashboard from "../Dashboard/AdminDashboard/AdminDashboard/AdminDashboard";
import AddClub from "../Dashboard/AdminDashboard/AddClub/AddClub";
import TotalModaerator from "../Dashboard/AdminDashboard/TotalModarator/TotalModaerator.js";
import TotalClub from "../Dashboard/AdminDashboard/TotalClub/TotalClub";
import TransferredBalance from "../Dashboard/AdminDashboard/balanceTransfer/TransferedBalance";
import WithdrawHistory from "../Dashboard/AdminDashboard/WithdrawHistory/WithdrawHistory";
import DepositHistory from "../Dashboard/AdminDashboard/DepositHistory/DepositHistory";
import UserProfile from "../Dashboard/UserDashboard/PasswordChange/UserProfile";
import PasswordChange from "../Dashboard/UserDashboard/PasswordChange/PasswordChange";
import PostBate from "../Dashboard/AdminDashboard/PostBate/PostBate/PostBate";
import AddPostBate from "../Dashboard/AdminDashboard/PostBate/AddPostBate/AddPostBate";
import UpdatePostBate from "../Dashboard/AdminDashboard/PostBate/UpdatePostBate/UpdatePostBate";
import SetOpction from "../Dashboard/AdminDashboard/PostBate/SetOpction/SetOpction";
import TotalUser from "../Dashboard/AdminDashboard/TotalUser/TotalUser";
import TotalSponsor from "../Dashboard/AdminDashboard/TotalSponsor/TotalSponsor";
import Refound from "../Dashboard/AdminDashboard/Refound/Refound";
import AdminRoute from "./AdminRouter";
import PrivetRoute from "./PrivetRouter";
import Controller from "../Dashboard/Controller/Controller";
import TotalTranstion from "../Dashboard/AdminDashboard/TotalTranstion/TotalTranstion";
import Setting from "../Dashboard/AdminDashboard/Setting/Setting";
import PostHistory from "../Dashboard/AdminDashboard/PostHistory/PostHistory";
import BltransferHistory from "../Dashboard/AdminDashboard/balanceTransfer/BltransferHistory/BltransferHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/user/dashboard",
    element: (
      <>
        <PrivetRoute>
          <UserDashboardLayout></UserDashboardLayout>,
        </PrivetRoute>
      </>
    ),
    children: [
      {
        path: "/user/dashboard",
        element: <UserDasboard></UserDasboard>,
      },
      {
        path: "/user/dashboard/allsponsor",
        element: <Allsponsor></Allsponsor>,
      },

      {
        path: "/user/dashboard/userprofile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "user/dashboard/passwordChange",
        element: <PasswordChange></PasswordChange>,
      },

      {
        path: "/user/dashboard/statement",
        element: <Statement></Statement>,
        children: [
          {
            path: "/user/dashboard/statement",
            element: <AllBats></AllBats>,
          },
          {
            path: "/user/dashboard/statement/allBets",
            element: <AllBats></AllBats>,
          },
          {
            path: "/user/dashboard/statement/allDeposit",
            element: <AllDeposite></AllDeposite>,
          },
          {
            path: "/user/dashboard/statement/balanceTransfer",
            element: <BalanceTransfer></BalanceTransfer>,
          },
          {
            path: "/user/dashboard/statement/withdraw",
            element: <AllWidrow></AllWidrow>,
          },
          {
            path: "/user/dashboard/statement/transactionHistory",
            element: <TransactionHistory></TransactionHistory>,
          },
        ],
      },
      {
        path: "/user/dashboard/finance",
        element: <FinanceMain />,
        children: [
          {
            path: "/user/dashboard/finance",
            element: <Deposit />,
          },
          {
            path: "/user/dashboard/finance/balanceTransfer",
            element: <BalanceTrans />,
          },
          {
            path: "/user/dashboard/finance/withdraw",
            element: <Withdraw />,
          },
          {
            path: "/user/dashboard/finance/changeClub",
            element: <ChangeClub />,
          },
        ],
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: (
      <AdminRoute>
        <AdminDashboardLayout></AdminDashboardLayout>,
      </AdminRoute>
    ),
    children: [
      {
        path: "/admin/dashboard",
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: "/admin/dashboard/postBate",
        element: <PostBate></PostBate>,
        children: [
          {
            path: "/admin/dashboard/postBate",
            element: <AddPostBate></AddPostBate>,
          },
          {
            path: "/admin/dashboard/postBate/updateBate",
            element: <UpdatePostBate></UpdatePostBate>,
          },
          {
            path: "/admin/dashboard/postBate/setopction",
            element: <SetOpction></SetOpction>,
          },
        ],
      },
      {
        path: "/admin/dashboard/controlar",
        element: <Controller></Controller>,
      },
      {
        path: "/admin/dashboard/edite",
        element: <h1>Edite</h1>,
      },
      {
        path: "/admin/dashboard/totalUser",
        element: <TotalUser></TotalUser>,
      },
      {
        path: "/admin/dashboard/totalUserBalance",
        element: <h1>totalUserBalance</h1>,
      },
      {
        path: "/admin/dashboard/adminProfile",
        element: <UserProfile></UserProfile>,
      },

      {
        path: "/admin/dashboard/totalSponcer",
        element: <TotalSponsor></TotalSponsor>,
      },

      {
        path: "/admin/dashboard/refound",
        element: <Refound></Refound>,
      },

      {
        path: "/admin/dashboard/totalTranstiton",
        element: <TotalTranstion></TotalTranstion>,
      },

      {
        path: "/admin/dashboard/addClub",
        element: <AddClub />,
      },

      {
        path: "/admin/dashboard/totalModaretor",
        element: <TotalModaerator />,
      },
      {
        path: "/admin/dashboard/totalClube",
        element: <TotalClub />,
      },
      {
        path: "/admin/dashboard/balanceTransfer",
        element: <TransferredBalance />,
      },
      {
        path: "/admin/dashboard/totalWidrowBalance",
        element: <WithdrawHistory />,
      },
      {
        path: "/admin/dashboard/totalDeposit",
        element: <DepositHistory></DepositHistory>,
      },
      {
        path: "/admin/dashboard/setting",
        element: <Setting></Setting>,
      },
      {
        path: "/admin/dashboard/postHistory",
        element: <PostHistory></PostHistory>,
      },
      {
        path: "/admin/dashboard/balanceTransferred",
        element: <BltransferHistory />,
      },
    ],
  },
]);

export default router;
