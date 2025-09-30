import React, { useState, useEffect } from "react";

const DynamicIcon = ({ iconName, iconFamily, ...props }) => {
  const [IconComponent, setIconComponent] = useState(null);

  useEffect(() => {
    if (iconName && iconFamily) {
      // Dynamically import the icon family module
      import(`react-icons/${iconFamily}`)
        .then((module) => {
          // Get the specific icon component from the module
          const Icon = module[iconName];
          setIconComponent(() => Icon); // Store the component in state
        })
        .catch((error) => {
          console.error(
            `Error loading icon ${iconName} from ${iconFamily}:`,
            error
          );
          setIconComponent(null); // Handle cases where icon is not found
        });
    } else {
      setIconComponent(null);
    }
  }, [iconName, iconFamily]); // Re-run effect if iconName or iconFamily changes

  return IconComponent ? <IconComponent {...props} /> : null;
};

export default DynamicIcon;
