'use client';

import { Tweet } from 'react-tweet'

export default function SocialWall() {
    return (
      <>
        <section  className="mx-auto w-10/12  py-14">
            <h2 className="text-2xl font-bold mb-8 text-center">what people think about</h2>   
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                    <Tweet id="1852091173420294291"/>
                    <Tweet id="1852214861972820198" />
                </div>
                <div>
                    <Tweet id="1852563699682148629" />
                    <Tweet id="1852428990423937515" />
                </div>
                <div>
                    <Tweet id="1852813550890123470" />
                    <Tweet id="1852632748600471639" />
                    <Tweet id="1852279815878930759" />
                </div>
            </div>
        </section>
      </>
    )
  }