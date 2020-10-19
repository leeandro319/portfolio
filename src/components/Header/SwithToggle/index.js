import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";

function SwitchToggle(props) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Switch
      onChange={props.ttheme}
      checked={title === "dark"}
      checkedIcon={false}
      uncheckedIcon={false}
      height={5}
      width={20}
      handleDiameter={12}
      onColor={shade(0.05, colors.secundary)}
      offColor={shade(0.15, colors.primary)}
      activeBoxShadow={colors.shadowSwitchTheme}
    />
  );
}

export default SwitchToggle;
