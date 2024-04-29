import React from "react";
import AuthStackNavigator from "../stack/AuthStackNavigator";
import StackNavigator from "../stack/StackNavigator";

function RootNavigator() {
  const isLoggedIn = true;
  return <>{isLoggedIn ? <StackNavigator /> : <AuthStackNavigator />}</>;
}

export default RootNavigator;
