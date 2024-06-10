import React from "react";

const Button: any = ({
    onClick=null, 
    type="", 
    children="", 
    className="",
    variant="primary"
}: any) => {

    const variantClasses = {
        primary: 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800',
        warning: 'text-white bg-orange-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800',
    } as any

    return (
        <button
            type={type}
            onClick={onClick}
            className={className + " " + variantClasses[variant]}
        >{children}</button>
    );
};

export default Button;
