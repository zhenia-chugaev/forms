export type Dictionary = Record<string, string | number | boolean>;

export type FormTemplate = Record<string, string | number>;

export type FormFieldAttributes = Dictionary & {
  as?: 'input' | 'textarea';
};

type EncriptionTypes =
  | 'application/x-www-form-urlencoded'
  | 'multipart/form-data'
  | 'text/plain';

type FormTargets = '_self' | '_blank' | '_parent' | '_top';

interface FormSubmissionAttributes {
  url?: string;
  novalidate?: boolean;
  target?: FormTargets;
}

type GetFormAttributes = FormSubmissionAttributes & {
  method: 'get';
};

type PostFormAttributes = FormSubmissionAttributes & {
  method?: 'post';
  enctype?: EncriptionTypes;
};

export type FormAttributes = GetFormAttributes | PostFormAttributes;

export type Formats = 'html';

export interface FormGeneratorConfig {
  format?: Formats;
}
