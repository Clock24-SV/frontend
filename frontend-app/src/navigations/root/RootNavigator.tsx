import React from "react";
import AuthStackNavigator from "../stack/AuthStackNavigator";
import StackNavigator from "../stack/StackNavigator";

function RootNavigator() {
  const isLoggedIn = false;
  return <>{isLoggedIn ? <StackNavigator /> : <AuthStackNavigator />}</>;
}

export default RootNavigator;
