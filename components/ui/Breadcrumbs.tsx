"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { menuItems } from "@/constant/data";
import Icon from "@/components/ui/Icon";

const Breadcrumbs = () => {
  const location = usePathname();
  const locationNameFromPath = location.replace("/", "");

  const [isHide, setIsHide] = useState(null);
  const [groupTitle, setGroupTitle] = useState("");
  const [groupIcon, setGroupIcon] = useState("");
  const [locationName, setLocationName] = useState(locationNameFromPath); // Set default location name
  const crumbs = locationNameFromPath.split("/");

  useEffect(() => {
    // Find the current parent menu item based on the path
    const currentMenuItem = menuItems.find((item) => locationNameFromPath.startsWith(item.link));

    // Find the current child menu item
    const currentChild = menuItems.find((item) =>
      item.child?.find((child) => locationNameFromPath.startsWith(child.childlink)),
    );

    // If it's a parent item, set isHide and locationName based on the parent
    if (currentMenuItem) {
      setIsHide(currentMenuItem.isHide);
      setLocationName(currentMenuItem.title); // Set location name to the parent title
    }
    // If it's a child item, set isHide, groupTitle, groupIcon, and locationName based on the child
    else if (currentChild) {
      const matchedChild = currentChild.child.find((child) =>
        locationNameFromPath.startsWith(child.childlink),
      );
      setIsHide(currentChild.isHide || false);
      setGroupTitle(currentChild.title);
      setGroupIcon(currentChild.icon);
      setLocationName(matchedChild?.childtitle); // Set location name to the child title
    }
  }, [location, locationNameFromPath]);

  return (
    <>
      {!isHide ? (
        <div className="mb-4 flex space-x-3 md:mb-6 rtl:space-x-reverse">
          <ul className="breadcrumbs">
            <li className="text-primary-500">
              <Link href="/dashboard" className="text-lg">
                <Icon icon="heroicons-outline:home" />
              </Link>
              <span className="breadcrumbs-icon rtl:rotate-180 rtl:transform">
                <Icon icon="heroicons:chevron-right" />
              </span>
            </li>
            {groupTitle && (
              <li className="text-primary-500">
                <span className="flex items-center space-x-2 capitalize">
                  <Icon icon={groupIcon} width={18} />
                  <span>{groupTitle}</span>
                </span>
                <span className="breadcrumbs-icon rtl:rotate-180 rtl:transform">
                  <Icon icon="heroicons:chevron-right" />
                </span>
              </li>
            )}
            {/* <li className="capitalize text-slate-500 dark:text-slate-400">{locationName}</li> */}
            {crumbs.map((crumb, index) =>
              index !== crumbs.length - 1 ? (
                <li key={index} className="capitalize text-primary-500">
                  <Link href={`/${crumb}`}>{crumb}</Link>
                  <span className="breadcrumbs-icon rtl:rotate-180 rtl:transform">
                    <Icon icon="heroicons:chevron-right" />
                  </span>
                </li>
              ) : (
                <li key={index} className="capitalize text-slate-500 dark:text-slate-400">
                  {crumb}
                </li>
              ),
            )}
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Breadcrumbs;
