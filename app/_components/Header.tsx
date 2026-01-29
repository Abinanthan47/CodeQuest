import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { CircleAlertIcon } from "lucide-react";

const courses = [
  {
    id: 1,
    name: "HTML",
    desc: "Learn the fundamentals of HTML and build the structure of modern web pages.",
    path: "/course/1/detail",
  },
  {
    id: 2,
    name: "CSS",
    desc: "Master CSS to style and design responsive, visually appealing web layouts.",
    path: "/course/2/detail",
  },
  {
    id: 3,
    name: "React",
    desc: "Build dynamic and interactive web applications using the React JavaScript library.",
    path: "/course/3/detail",
  },
  {
    id: 4,
    name: "React Advanced",
    desc: "Deep dive into advanced React concepts including hooks, state management, performance optimization,",
    path: "/course/4/detail",
  },
];

const Header = () => {
  return (
    <div className="flex max-w-7xl p-4 justify-between mx-auto items-center w-full">
      <div className="flex gap-2 items-center justify-center">
        <Image src="/logo.png" alt="Code Quest Logo" width={30} height={30} />
        <h1 className="text-3xl font-pixel  ">CodeQuest</h1>
      </div>
      {/* Nav Links */}
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid md:grid-cols-2 gap-2 sm:w-100 md:w-125 lg:w-150">
                  {courses.map((course, index) => (
                    <div
                      key={index}
                      className="p-2 hover:bg-accent  rounded-xl cursor-pointer"
                    >
                      <h2 className="font-medium">{course.name}</h2>
                      <p className="text-xs text-gray-500">{course.desc}</p>
                    </div>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/">Projects</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/">Pricing</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/">Contact</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Button Get started / login */}

      <div>
        <Button variant={"pixel"} className="font-pixel text-2xl">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Header;
