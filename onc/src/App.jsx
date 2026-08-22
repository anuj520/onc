import {createBrowserRouter, Navigate, RouterProvider, useNavigate} from "react-router-dom"
import { GetStarted } from "./StartedPages/GetStarted"
import { SignUp } from "./StartedPages/SignUp"
import { Login } from "./StartedPages/Login"
import { Home } from "./HomePart/Home"
import { QueryClient,QueryClientProvider } from "@tanstack/react-query"
import { Games } from "./HomePart/Games"
import { Video } from "./HomePart/video"
import { Setting } from "./setting/Setting"
import { Ai } from "./Ai/Ai"
import { User } from "./MenuParts/User"
import { Champion } from "./MenuParts/Champion"
import { GamesCollections } from "./MenuParts/GamesCollections"
import { Search } from "./MenuParts/Search"
import { About } from "./MenuParts/Adout"
import { Problem } from "./Multer/Problem"
import { Users } from "./Admin/Users"
import { ContectUser } from "./Admin/ContectUser"
import { UserProblem } from "./Admin/UserProblem"
import { Admin_Layout } from "./Admin/Admin_layout"
import { Updateuser } from "./Admin/upDateUser"
import { Genre } from "./ApiCollection/genre"
import { Tags } from "./ApiCollection/tags"
import { Detalish } from "./ApiCollection/detalish"
import { GenreInfo } from "./ApiCollection/GenreInfo"
import { Creators } from "./ApiCollection/Creators"
import { Platforms } from "./ApiCollection/platfrom"
import { Loading } from "./Loading/Loading"
import { CreatorsId } from "./ApiCollection/CreatorsId"
import { ChamptionId } from "./MenuParts/chamption"
import { Year } from "./MenuParts/Year"
import { Year2 } from "./MenuParts/Year3"
import { TryNow } from "./MenuParts/TryNow"
import {GoogleOAuthProvider} from "@react-oauth/google"
import { Reply } from "./Admin/Reply"
import { GoogleUsers } from "./Admin/GoogleUsers"
import { Message } from "./MenuParts/Message"
import { Notification } from "./Admin/Notifiaction"
import { UserNotification } from "./MenuParts/userNotification"
import { ProblemReplay } from "./Admin/problemReply"
import { UserBlock } from "./Admin/UserBlock"
import { Verfication } from "./Admin/Verfication"
import { ErrorElements } from "./Error/ErrorElements"
import { useAuth } from "./ContextAPI/ContextAPI"
import { PersonBlocked } from "./Error/PersonBlocked"
import { SettingMenu } from "./setting/SettingMenu"
import { SettingGet } from "./setting/SettingGet"
import { Video2 } from "./HomePart/video2"
import { Daygames } from "./MenuParts/dayGames"
import { Weekgames } from "./MenuParts/weekGames"
import { Monthgames } from "./MenuParts/monthGames"
import { Yeargames } from "./MenuParts/YearGames"
import { Likes } from "./Likes/likes"
import { Mike } from "./maik/maik"
import { FaV } from "react-icons/fa6"
import { Fav } from "./fav/fav"
import { Worldchat } from "./worldChat/chart"
import { OncTrainText } from "./fav/onctrain.text"
import { Emailvalibation } from "./StartedPages/emailvalibation"
import { Pins } from "./StartedPages/pinvalidation"
import { ForgetPassword } from "./StartedPages/forgetpassword"
import { Forgetpins } from "./StartedPages/forgetpins"
import { ChangePsaaword } from "./StartedPages/changePassword"
import { Testing } from "./MenuParts/texting"
import { Desighev } from "./StartedPages/Desighev"
import { SomethingNew } from "./MenuParts/somethingNew"
import { Javaid } from "./maik/javaid"


// Initialize Query Client
const queryClient = new QueryClient();

const GoogleAuth = () => {
  return (
    <GoogleOAuthProvider clientId="275742938562-dduioo7m4sebi84q3k3lff506p034njb.apps.googleusercontent.com">
      <Login />
    </GoogleOAuthProvider>
  );
};

const GoogleAuthSign = () => {
  return (
    <GoogleOAuthProvider clientId="275742938562-dduioo7m4sebi84q3k3lff506p034njb.apps.googleusercontent.com">
      <SignUp />
    </GoogleOAuthProvider>
  );
};

const GoogleEmail = () =>{
 return(
  <GoogleOAuthProvider clientId="275742938562-dduioo7m4sebi84q3k3lff506p034njb.apps.googleusercontent.com">
   <Emailvalibation/>
   </GoogleOAuthProvider>
 ) 
}

function App() {
  const { data: authData } = useAuth();


  const router = createBrowserRouter([
    {
      path: '*',
      element: <ErrorElements />,
    },
    {
      path: '/',
      element:  <GetStarted />,
    },
    {
      path: '/signUp/:email',
      element: <GoogleAuthSign />,
    },
    {
      path: '/login',
      element: <GoogleAuth />,
    },
     {
      path: '/emailvalibation',
      element: <GoogleEmail/>
    },
    {
      path: '/Home',
      element: authData.isBlocked ? <PersonBlocked /> : <Home />,
    },
    {
      path: '/games/:id',
      element: authData.isBlocked ? <PersonBlocked /> : <Games />,
    },
    {
      path: '/try/:id',
      element: authData.isBlocked ? <PersonBlocked /> : <Video />,
    },
    {
      path: '/try2/:id',
      element: authData.isBlocked ? <PersonBlocked /> : <Video2 />,
    },
    {
      path: '/setting',
      element: authData.isBlocked ? <PersonBlocked /> : <Setting />,
      children:[

        {
          path: "Menu",
          element:<SettingMenu/>
        },
        {
          path : "getStarted",
          element : <SettingGet/>
        }
      ]
    },
    {
      path: '/Ai',
      element: authData.isBlocked ? <PersonBlocked /> : <Ai />
    },
    {
      path: '/user',
      element: authData.isBlocked ? <PersonBlocked />:  <User/>,
      children:[
        {
          path:"message/:email",
          element: authData.isBlocked ? <PersonBlocked /> :<Message/>
        },
        {
          path: "notification",
          element: authData.isBlocked ? <PersonBlocked /> :<UserNotification/>
        }
      ]
    },
    {
      path: '/champion',
      element: authData.isBlocked ? <PersonBlocked /> : <Champion />,
    },

    {
      path: "/games",
      element: authData.isBlocked ? <PersonBlocked />:<GamesCollections/>,
      children:[
        {
          path: "day",
          element: <Daygames/>
        },
              {
          path: "week",
          element: <Weekgames/>
        },
              {
          path: "month",
          element: <Monthgames/>
        },
              {
          path: "year",
          element: <Yeargames/>
        }
      ]
    },
    {
      path: "/search",
      element:authData.isBlocked ? <PersonBlocked />: <Search/>
    },
    {
      path: "/About",
      element: authData.isBlocked ? <PersonBlocked />:<About/>
    },
    {
      path: "/problem",
      element: authData.isBlocked ? <PersonBlocked />:<Problem/>
    },
    {
      path: "/admin",
      element: authData.isBlocked ? <PersonBlocked />:<Admin_Layout/>,
    },
        {
          path: "/users",
          element: authData.isBlocked ? <PersonBlocked />:<Users/>
        },
        {
          path: "/ContectUser",
       element: authData.isBlocked ? <PersonBlocked />:<ContectUser/>
        },
        {
          path: "/userProblem",
       element: authData.isBlocked ? <PersonBlocked />:<UserProblem/>
        },
        {
          path: "/googleUsers",
          element: authData.isBlocked ? <PersonBlocked />:<GoogleUsers/>
        } , 
    {
      path: "/admin/user/:id/edit",
      element : authData.isBlocked ? <PersonBlocked />:<Updateuser/>
    },
    {
      path: "/genra",
      element: authData.isBlocked ? <PersonBlocked />:<Genre/>
    },
    {
      path: "/tag",
      element: authData.isBlocked ? <PersonBlocked />:<Tags/>
    },
    {
      path: "/gamesD/:name",
      element: authData.isBlocked ? <PersonBlocked />:<Detalish/>
    },
    {
      path: "/genreD/:name",
      element: authData.isBlocked ? <PersonBlocked />:<GenreInfo/>
    },
    {
      path: "/creators",
      element: authData.isBlocked ? <PersonBlocked />:<Creators/>
    },
    {
      path: "/creator/:id",
      element: authData.isBlocked ? <PersonBlocked />:<CreatorsId/>
    },
    {
      path: "/platform",
      element: authData.isBlocked ? <PersonBlocked />:<Platforms/>
    },
    
    {
      path: "/load",
      element: authData.isBlocked ? <PersonBlocked />:<Loading/>
    },
    {
      path: "/champtionId/:id",
      element: authData.isBlocked ? <PersonBlocked />:<ChamptionId/>,
    },
    {
      path:"/year/:id",
      element: authData.isBlocked ? <PersonBlocked />:<Year/>
    },
    {
      path:"/year2/:id",
      element: authData.isBlocked ? <PersonBlocked />:<Year2/>
    },
    {
      path:"/trynow",
      element: authData.isBlocked ? <PersonBlocked />:<TryNow/>
    },
    {
      path:"/admin/Reply/:id",
      element: authData.isBlocked ? <PersonBlocked />:<Reply/>
    },
    {
      path: "/notificationAdmin",
      element: authData.isBlocked ? <PersonBlocked />:<Notification/>
    },{
      path: '/userproble/:id',
      element : authData.isBlocked ? <PersonBlocked />:<ProblemReplay/>
    },{
      path: '/Block',
      element: authData.isBlocked ? <PersonBlocked />:<UserBlock/>
    },{
      path:"/verfication",
      element: authData.isBlocked ? <PersonBlocked />:<Verfication/> 
    },{
      path :"/likes",
      element : <Fav/>
    },
    {
      path :"/mic",
      element : <Mike/>
    },
    {
      path: '/worldChat',
      element: <Worldchat/>
    },
    {
      path: '/homesec',
      element: <OncTrainText/>
    },{
      path:"/Pins/:verify",
      element:<Pins/>
    },{
      path:"/forgetpasword",
      element: <ForgetPassword/>
    },{
      path:"/passpins/:email",
      element:<Forgetpins/>
    },
    {
      path:"/changepassword",
    element: <ChangePsaaword/>
    },
    {
      path:"/edit",
      element:<Testing/>
    },
        {
      path:"/sunof",
      element:<SomethingNew/>
    },{
      path:"javid",
      element:<Javaid/>
    }
    
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
