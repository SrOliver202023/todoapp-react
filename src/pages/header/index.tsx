import React from 'react';
import './style.css';




export default function Header(){
    return( 
       <header className="dark:bg-slate-900 relative min-h-screen ">
            <h1 className="text-white text-center p-5 text-4xl font-semibold">TO DO LIST</h1>
       </header>
    );

}