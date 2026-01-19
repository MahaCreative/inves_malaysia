import LoginController from './LoginController'
import HomeController from './HomeController'
import DashboardController from './DashboardController'
import SettingWA from './SettingWA'
import UserController from './UserController'
import PaketTradingController from './PaketTradingController'
import MemberController from './MemberController'
import PendaftaranController from './PendaftaranController'
import PrivaccPolicyController from './PrivaccPolicyController'
import Office from './Office'
import ProfilController from './ProfilController'
import DasarPrinsipController from './DasarPrinsipController'
const Controllers = {
    LoginController: Object.assign(LoginController, LoginController),
HomeController: Object.assign(HomeController, HomeController),
DashboardController: Object.assign(DashboardController, DashboardController),
SettingWA: Object.assign(SettingWA, SettingWA),
UserController: Object.assign(UserController, UserController),
PaketTradingController: Object.assign(PaketTradingController, PaketTradingController),
MemberController: Object.assign(MemberController, MemberController),
PendaftaranController: Object.assign(PendaftaranController, PendaftaranController),
PrivaccPolicyController: Object.assign(PrivaccPolicyController, PrivaccPolicyController),
Office: Object.assign(Office, Office),
ProfilController: Object.assign(ProfilController, ProfilController),
DasarPrinsipController: Object.assign(DasarPrinsipController, DasarPrinsipController),
}

export default Controllers