import { Switch, Route } from "react-router";
import { Drinks } from "../pages/drinks";
import { Graduation } from "../pages/graduation";
import { Wedding } from "../pages/wedding";
import { Confraternization } from "../pages/confraternization";
export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Drinks} />
    <Route path="/graduation" component={Graduation} />
    <Route path="/wedding" component={Wedding} />
    <Route path="/confraternization" component={Confraternization} />
  </Switch>
);
