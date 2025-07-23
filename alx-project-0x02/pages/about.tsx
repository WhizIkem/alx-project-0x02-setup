// About page
import React from "react";
import Button from "@/components/common/Button";
import Header
  from "@/components/layout/Header";

const About: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="p-4">
        <h1 className="text-2xl font-bold">About Us Page</h1>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-2">
            <Button label="Small sm Round" size="small" shape="rounded-sm" onClick={() => alert("Button clicked!")} />
            <Button label="Small md Round" size="small" shape="rounded-md" onClick={() => alert("Button clicked!")} />
            <Button label="Small lg Round" size="small" shape="rounded-full" onClick={() => alert("Button clicked!")} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-2">
            <Button label="Medium sm Round" size="medium" shape="rounded-sm" onClick={() => alert("Button clicked!")} />
            <Button label="Medium md Round" size="medium" shape="rounded-md" onClick={() => alert("Button clicked!")} />
            <Button label="Medium lg Round" size="medium" shape="rounded-full" onClick={() => alert("Button clicked!")} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-2">
            <Button label="Large sm Round" size="large" shape="rounded-sm" onClick={() => alert("Button clicked!")} />
            <Button label="Large md Round" size="large" shape="rounded-md" onClick={() => alert("Button clicked!")} />
            <Button label="Large lg Round" size="large" shape="rounded-full" onClick={() => alert("Button clicked!")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
