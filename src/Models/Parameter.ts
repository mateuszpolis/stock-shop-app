import { Option } from "./Option";

export type ParameterResponse = {
  id: number;
  categoryId: number;
  name: string;
  description: string;
  parameterType: string;
  predefinedChoices: string;
};

export type Parameter = {
  id: number;
  categoryId: number;
  name: string;
  description: string;
  parameterType: string;
  predefinedChoices: Option[];
};
