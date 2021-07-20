/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL fragment: HighlightFrament
// ====================================================

export interface HighlightFrament_background {
  __typename: "UploadFile";
  url: string;
}

export interface HighlightFrament_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface HighlightFrament {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: HighlightFrament_background | null;
  floatImage: HighlightFrament_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}
