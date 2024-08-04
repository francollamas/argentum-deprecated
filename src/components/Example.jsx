import { extend, useAssets } from "@pixi/react";
import gold from "../assets/gold.png";
import clothes from "../assets/clothes.png";
import { addUser, userSelector } from "../store/slice/userSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Container, Sprite } from 'pixi.js'
import { Texture } from 'pixi.js'

extend({ Container, Sprite })

export const Example = () => {
  const users = useAppSelector(userSelector);
  const dispatch = useAppDispatch();
  const {assets: [goldTexture, clothesTexture], isSuccess} = useAssets([
    gold,
    clothes
  ])

  const handleAddUser = () => {
    console.log("clicking!!")
    const newUser = {
      id: "abc",
      name: "John",
      email: "john@email.com",
    };

    dispatch(addUser(newUser));
  };

  return (
    <container
      eventMode="static"
      onPointerDown={handleAddUser}
    >
      {isSuccess && (
        <sprite
          texture={users.length % 2 == 0 ? goldTexture : clothesTexture}
          />
        )}
    </container>
  );
};
