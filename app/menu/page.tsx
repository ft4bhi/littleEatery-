import React from "react";

const Menu = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <iframe
                src="/menu/orm.pdf"
                width="80%"
                height="800px"
                title="Menu PDF"
                className="border-0"
            />
        </div>
    );
};

export default Menu;
