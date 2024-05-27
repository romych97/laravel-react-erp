"use client";

import React from "react";

const Button: any = (props: any) => {

    const variantClasses = {
        blue: 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800',
    } as any

    return (
        <button
            type="button"
            onClick={() => props.trigger(true)}
            className={variantClasses[props.variant || "blue"]}
        >{props.children}</button>
    );
};

export default Button;
