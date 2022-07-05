import { useState } from "react";
import styled from "styled-components";

const TabMenu = styled.ul`
  background-color: #dcdcdc;
  color: rgba(73, 73, 73, 0.5);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;
  margin-bottom: 7rem;

  .submenu {
    width: calc(100% / 3);
  }

  .focused {
    background: #4000c7;
    color: white;
  }

  & div.desc {
    text-align: center;
  }
`;

const Desc = styled.div`
  text-align: center;
`;

export const Tab = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const selectMenuHandler = (index) => {
    console.log(index);
    setCurrentTab(index);
    // console.log(currentTab);
  };

  const menuArr = [
    { name: "Tab1", content: "Tab menu 1" },
    { name: "Tab2", content: "Tab menu 2" },
    { name: "Tab3", content: "Tab menu 3" }
  ];

  return (
    <>
      <div>
        <TabMenu>
          {menuArr.map((el, index) => {
            return (
              <li
                key={index}
                className={index === currentTab ? "submenu focused" : "submenu"}
                onClick={() => selectMenuHandler(index)}
              >
                {el.name}
              </li>
            );
          })}
        </TabMenu>
        <Desc>
          <p>{menuArr[currentTab].content}</p>
        </Desc>
      </div>
    </>
  );
};
