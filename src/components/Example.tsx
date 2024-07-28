import { useAsset, useExtend } from "@pixi/react";
import gold from "../assets/gold.png";
import clothes from "../assets/clothes.png";
import { addUser, userSelector } from "../store/slice/userSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useEffect } from "react";
import { Container, Sprite, Texture } from "pixi.js";


export const Example = () => {
  useExtend({ Container, Sprite })
  const users = useAppSelector(userSelector);
  const dispatch = useAppDispatch();

  const goldTexture: Texture = useAsset({ src: gold})
  const clothesTexture: Texture = useAsset({ src: clothes})

  useEffect(() => {
    console.log(users)
  }, [users])

  const handleAddUser = () => {
    console.log("cliqueando!!")
    const newUser = {
      id: "abc",
      name: "John",
      email: "john@email.com",
    };

    dispatch(addUser(newUser));
  };

  return (
    <container>
          <sprite
            texture={users.length % 2 == 1 ? clothesTexture : goldTexture}
            eventMode="static"
            onPointerDown={handleAddUser}
          />



    </container>
  );
};
