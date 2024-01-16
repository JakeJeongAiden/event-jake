import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-7xl mx-auto min-h-screen bg-gray-900/[3%] flex flex-col">
      {children}
    </div>
  );
}

/* === NOTES ===
1. This is a container component mainly for sizing of the app.
2. Once we define a max width, we can use `mx-auto` to center the container.

Vertical sizing
1. CSS Trick: min-h-screen to make the container at least the height of the screen or 100vh.


 */
