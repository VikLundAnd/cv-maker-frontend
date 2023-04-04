import { useTemplate } from "@/hooks/useTemplate";
import { Configuration } from "@/utils/createTemplate";
import { toBase64 } from "@/utils/toBase64";
import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Kbd,
  SimpleGrid,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Card } from "@nextui-org/react";
import { ChangeEventHandler, FC } from "react";
import styles from "./DocumentForm.module.scss";

export const DocumentForm: FC = () => {
  const [{ configuration }, setValue] = useTemplate();

  console.log(configuration);

  const handleInputChange =
    (key: string): ChangeEventHandler<HTMLInputElement> =>
    (e) => {
      setValue(key, e.target.value);
    };

  const handleTextAreaChange =
    (key: string): ChangeEventHandler<HTMLTextAreaElement> =>
    (e) => {
      setValue(key, e.target.value);
    };

  const handleImageChange =
    (key: string): ChangeEventHandler<HTMLInputElement> =>
    async (e) => {
      const file = e.target.files?.item(0);

      if (!file) return;
      const fileString = await toBase64(file);
      setValue(key, fileString ?? "");
    };

  const getElement = (name: string, value: Configuration) => {
    switch (value.type) {
      case "text":
        return (
          <FormControl>
            <FormLabel>
              <Text casing={"capitalize"}>{name}</Text>
            </FormLabel>
            <Input
              key={name}
              value={value.value}
              onChange={handleInputChange(name)}
            />
          </FormControl>
        );

      case "textfield":
        return (
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>
                <Text casing={"capitalize"}>{name}</Text>
              </FormLabel>
              <Textarea
                width="100%"
                height={124}
                resize={"none"}
                key={name}
                value={value.value}
                onChange={handleTextAreaChange(name)}
              />
            </FormControl>
          </GridItem>
        );

      case "image":
        return (
          <FormControl>
            <FormLabel>
              <Text casing={"capitalize"}>{name}</Text>
            </FormLabel>
            <input type="file" onChange={handleImageChange(name)} />
          </FormControl>
        );

      case "collection":
        return (
          <GridItem colSpan={2}>
            <Card>
              {Object.entries(value.value[0]).map(([key, value]) =>
                getElement(key, value)
              )}
            </Card>
          </GridItem>
        );

      default:
        return <Text>Unable to determine type of input</Text>;
    }
  };

  const formElements =
    configuration &&
    Object.entries(configuration).map(([key, value]) => getElement(key, value));

  return (
    <Grid templateColumns="minmax(0, 1fr) minmax(0, 1fr)" gap={4}>
      {formElements}
    </Grid>
  );
};
