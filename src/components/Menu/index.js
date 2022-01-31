import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import { ContainerMenu } from "./styles";

export default function Menu() {
  return (
    <ContainerMenu>
      {routes.map((item) => (
        <Link
          to={{
            pathname: item.path,
            state: { name: item.name },
          }}
          key={item.name}
        >
          <img src={item.icon} alt={item.name}/>
        </Link>
      ))}
    </ContainerMenu>
  );
}
