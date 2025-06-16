import homeSvg from "./homesvg";
import Components from "./components";
import Settings from "./settings";
import BlankAvatar from "./profileBox";
import Person from "./person";
import Date from "./date";
import Alert from "./alert";
import Flash from "./flash";

const Navitemsvgs = [
    {
        label: "Home",
        icon: homeSvg,
        path: "/"
    },
    {
        label: "Components",
        icon: Components,
    },
    {
        label: "Person",
        icon: Person,   
    },
    {
        label: "Date",
        icon: Date,
    },
    {
        label: "Flash",
        icon: Flash,
    },
    {
        label: "Alert",
        icon: Alert
    },
    {
        label : "Settings",
        icon: Settings,
    },
    {
        label : "Profile",
        icon : BlankAvatar,
    }
]
export default Navitemsvgs;