import { render } from "@testing-library/react-native";
import React from "react";
import { Text } from "react-native";
import SquareButton from "../SquareButton";

describe(`SquareButton`, () => {
  it(`renders correctly`, () => {
    const helloWorld = "Hello World";
    const tree = render(
      <SquareButton onClick={() => {}}>
        <Text>{helloWorld}</Text>
      </SquareButton>
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
