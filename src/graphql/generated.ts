import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Any type */
  Any: { input: any; output: any; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Demarche = {
  __typename?: 'Demarche';
  a_la_une?: Maybe<Scalars['Boolean']['output']>;
  add_by?: Maybe<Scalars['String']['output']>;
  corps?: Maybe<Scalars['String']['output']>;
  cout?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  date_publication?: Maybe<Scalars['DateTime']['output']>;
  delai?: Maybe<Scalars['Int']['output']>;
  delatedAt?: Maybe<Scalars['DateTime']['output']>;
  demarches: Array<Demarche>;
  descripteurs: Array<Descripteur>;
  description: Scalars['String']['output'];
  est_publie?: Maybe<Scalars['Boolean']['output']>;
  etat?: Maybe<Scalars['String']['output']>;
  faqs: Array<Faq>;
  formulaires: Array<Formulaire>;
  id: Scalars['Any']['output'];
  lien_utiles: Array<LienUtile>;
  modele_lettres: Array<ModeleLettre>;
  mot_cle?: Maybe<Scalars['String']['output']>;
  observations?: Maybe<Scalars['String']['output']>;
  post_scriptum?: Maybe<Scalars['String']['output']>;
  resume?: Maybe<Scalars['String']['output']>;
  service_administratifs: Array<ServiceAdministratif>;
  slug: Scalars['String']['output'];
  sous_themes: Array<SousTheme>;
  teleprocedure?: Maybe<Scalars['Boolean']['output']>;
  textes: Array<Texte>;
  titre: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type DemarcheInput = {
  a_la_une: Scalars['Boolean']['input'];
  corps?: InputMaybe<Scalars['String']['input']>;
  cout?: InputMaybe<Scalars['Int']['input']>;
  delai?: InputMaybe<Scalars['Int']['input']>;
  demarches?: InputMaybe<Array<Scalars['Any']['input']>>;
  descripteurs?: InputMaybe<Array<Scalars['Any']['input']>>;
  description: Scalars['String']['input'];
  est_publie: Scalars['Boolean']['input'];
  etat: Scalars['String']['input'];
  faqs?: InputMaybe<Array<Scalars['Any']['input']>>;
  formulaires?: InputMaybe<Array<Scalars['Any']['input']>>;
  lien_utiles?: InputMaybe<Array<Scalars['Any']['input']>>;
  modele_lettres?: InputMaybe<Array<Scalars['Any']['input']>>;
  mot_cle?: InputMaybe<Scalars['String']['input']>;
  observations?: InputMaybe<Scalars['String']['input']>;
  post_scriptum?: InputMaybe<Scalars['String']['input']>;
  resume?: InputMaybe<Scalars['String']['input']>;
  service_administratifs?: InputMaybe<Array<Scalars['Any']['input']>>;
  sous_themes?: InputMaybe<Array<Scalars['String']['input']>>;
  teleprocedure: Scalars['Boolean']['input'];
  textes?: InputMaybe<Array<Scalars['Any']['input']>>;
  titre: Scalars['String']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
};

export type DemarcheInputSearchInput = {
  a_la_une?: InputMaybe<Scalars['Boolean']['input']>;
  est_publie?: InputMaybe<Scalars['Boolean']['input']>;
  etat?: InputMaybe<Scalars['String']['input']>;
  teleprocedure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DemarcheUpdateInput = {
  a_la_une?: InputMaybe<Scalars['Int']['input']>;
  corps?: InputMaybe<Scalars['String']['input']>;
  cout?: InputMaybe<Scalars['Int']['input']>;
  date_publication?: InputMaybe<Scalars['DateTime']['input']>;
  delai?: InputMaybe<Scalars['Int']['input']>;
  descripteurs: Array<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  est_publie?: InputMaybe<Scalars['Int']['input']>;
  etat?: InputMaybe<Scalars['String']['input']>;
  faqs: Array<Scalars['String']['input']>;
  formulaires: Array<Scalars['String']['input']>;
  lien_utiles: Array<Scalars['String']['input']>;
  modele_lettres: Array<Scalars['String']['input']>;
  mot_cle?: InputMaybe<Scalars['String']['input']>;
  observations?: InputMaybe<Scalars['String']['input']>;
  post_scriptum?: InputMaybe<Scalars['String']['input']>;
  resume?: InputMaybe<Scalars['String']['input']>;
  service_administratifs: Array<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sous_themes: Array<Scalars['String']['input']>;
  teleprocedure?: InputMaybe<Scalars['Int']['input']>;
  textes: Array<Scalars['String']['input']>;
  titre?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type Descripteur = {
  __typename?: 'Descripteur';
  id: Scalars['Int']['output'];
  libelle: Scalars['String']['output'];
  status: Scalars['Int']['output'];
};

export type DescripteurInput = {
  libelle: Scalars['String']['input'];
  status: Scalars['Int']['input'];
};

export type DescripteurUpdateInput = {
  libelle: Scalars['String']['input'];
  status: Scalars['Int']['input'];
};

export type Faq = {
  __typename?: 'Faq';
  add_by?: Maybe<Scalars['String']['output']>;
  date_derniere_modification?: Maybe<Scalars['DateTime']['output']>;
  date_publication: Scalars['DateTime']['output'];
  est_publie: Scalars['Int']['output'];
  etat: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  observations?: Maybe<Scalars['String']['output']>;
  question: Scalars['String']['output'];
  reponse: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type FaqInput = {
  add_by?: InputMaybe<Scalars['String']['input']>;
  date_derniere_modification?: InputMaybe<Scalars['DateTime']['input']>;
  date_publication: Scalars['DateTime']['input'];
  est_publie: Scalars['Int']['input'];
  etat: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  observations?: InputMaybe<Scalars['String']['input']>;
  question: Scalars['String']['input'];
  reponse: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type FaqUpdateInput = {
  add_by?: InputMaybe<Scalars['String']['input']>;
  date_derniere_modification?: InputMaybe<Scalars['DateTime']['input']>;
  date_publication: Scalars['DateTime']['input'];
  est_publie: Scalars['Int']['input'];
  etat: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  observations?: InputMaybe<Scalars['String']['input']>;
  question: Scalars['String']['input'];
  reponse: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type Formulaire = {
  __typename?: 'Formulaire';
  add_by?: Maybe<Scalars['String']['output']>;
  date_derniere_modification?: Maybe<Scalars['DateTime']['output']>;
  date_publication: Scalars['DateTime']['output'];
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  est_publie: Scalars['Int']['output'];
  etat: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  nom: Scalars['String']['output'];
  observations?: Maybe<Scalars['String']['output']>;
  post_scriptum: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type FormulaireInput = {
  add_by?: InputMaybe<Scalars['String']['input']>;
  date_derniere_modification?: InputMaybe<Scalars['DateTime']['input']>;
  date_publication: Scalars['DateTime']['input'];
  deleted_at?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  est_publie: Scalars['Int']['input'];
  etat: Scalars['String']['input'];
  nom: Scalars['String']['input'];
  observations?: InputMaybe<Scalars['String']['input']>;
  post_scriptum: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type FormulaireUpdateInput = {
  add_by?: InputMaybe<Scalars['String']['input']>;
  date_derniere_modification?: InputMaybe<Scalars['DateTime']['input']>;
  date_publication: Scalars['DateTime']['input'];
  deleted_at?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  est_publie: Scalars['Int']['input'];
  etat: Scalars['String']['input'];
  nom: Scalars['String']['input'];
  observations?: InputMaybe<Scalars['String']['input']>;
  post_scriptum: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type Hub = {
  __typename?: 'Hub';
  a_la_une?: Maybe<Scalars['Boolean']['output']>;
  add_by?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  date_publication?: Maybe<Scalars['DateTime']['output']>;
  delatedAt?: Maybe<Scalars['DateTime']['output']>;
  demarches: Array<Hub>;
  descripteurs: Array<Descripteur>;
  description: Scalars['String']['output'];
  est_publie?: Maybe<Scalars['Boolean']['output']>;
  etat?: Maybe<Scalars['String']['output']>;
  faqs: Array<Faq>;
  formulaires: Array<Formulaire>;
  id: Scalars['Any']['output'];
  lien_utiles: Array<LienUtile>;
  modele_lettres: Array<ModeleLettre>;
  mot_cle?: Maybe<Scalars['String']['output']>;
  observations?: Maybe<Scalars['String']['output']>;
  resume?: Maybe<Scalars['String']['output']>;
  service_administratifs: Array<ServiceAdministratif>;
  slug: Scalars['String']['output'];
  sous_themes: Array<SousTheme>;
  textes: Array<Texte>;
  titre: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type HubInput = {
  descripteurs?: InputMaybe<Array<Scalars['Any']['input']>>;
  description: Scalars['String']['input'];
  est_publie: Scalars['Boolean']['input'];
  etat: Scalars['String']['input'];
  faqs?: InputMaybe<Array<Scalars['Any']['input']>>;
  formulaires?: InputMaybe<Array<Scalars['Any']['input']>>;
  lien_utiles?: InputMaybe<Array<Scalars['Any']['input']>>;
  modele_lettres?: InputMaybe<Array<Scalars['Any']['input']>>;
  mot_cle?: InputMaybe<Scalars['String']['input']>;
  observations?: InputMaybe<Scalars['String']['input']>;
  resume?: InputMaybe<Scalars['String']['input']>;
  service_administratifs?: InputMaybe<Array<Scalars['Any']['input']>>;
  sous_themes?: InputMaybe<Array<Scalars['String']['input']>>;
  textes?: InputMaybe<Array<Scalars['Any']['input']>>;
  titre: Scalars['String']['input'];
};

export type HubInputSearchInput = {
  a_la_une?: InputMaybe<Scalars['Boolean']['input']>;
  est_publie?: InputMaybe<Scalars['Boolean']['input']>;
  etat?: InputMaybe<Scalars['String']['input']>;
};

export type HubUpdateInput = {
  a_la_une?: InputMaybe<Scalars['Int']['input']>;
  corps?: InputMaybe<Scalars['String']['input']>;
  cout?: InputMaybe<Scalars['Int']['input']>;
  date_publication?: InputMaybe<Scalars['DateTime']['input']>;
  delai?: InputMaybe<Scalars['Int']['input']>;
  descripteurs: Array<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  est_publie?: InputMaybe<Scalars['Int']['input']>;
  etat?: InputMaybe<Scalars['String']['input']>;
  faqs: Array<Scalars['String']['input']>;
  formulaires: Array<Scalars['String']['input']>;
  lien_utiles: Array<Scalars['String']['input']>;
  modele_lettres: Array<Scalars['String']['input']>;
  mot_cle?: InputMaybe<Scalars['String']['input']>;
  observations?: InputMaybe<Scalars['String']['input']>;
  post_scriptum?: InputMaybe<Scalars['String']['input']>;
  resume?: InputMaybe<Scalars['String']['input']>;
  service_administratifs: Array<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sous_themes: Array<Scalars['String']['input']>;
  teleprocedure?: InputMaybe<Scalars['Int']['input']>;
  textes: Array<Scalars['String']['input']>;
  titre?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type LienUtile = {
  __typename?: 'LienUtile';
  date_publication?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  est_publie: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  mot_cle?: Maybe<Scalars['String']['output']>;
  nom: Scalars['String']['output'];
  observations_prive?: Maybe<Scalars['String']['output']>;
  observations_public?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type LienUtileInput = {
  date_publication?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  est_publie: Scalars['Int']['input'];
  mot_cle?: InputMaybe<Scalars['String']['input']>;
  nom: Scalars['String']['input'];
  observations_prive?: InputMaybe<Scalars['String']['input']>;
  observations_public?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

export type LienUtileUpdateInput = {
  date_publication?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  est_publie: Scalars['Int']['input'];
  mot_cle?: InputMaybe<Scalars['String']['input']>;
  nom: Scalars['String']['input'];
  observations_prive?: InputMaybe<Scalars['String']['input']>;
  observations_public?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type ModeleLettre = {
  __typename?: 'ModeleLettre';
  add_by?: Maybe<Scalars['String']['output']>;
  date_derniere_modification?: Maybe<Scalars['DateTime']['output']>;
  date_publication: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  est_publie: Scalars['Int']['output'];
  etat: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  nom: Scalars['String']['output'];
  observations?: Maybe<Scalars['String']['output']>;
  post_scriptum: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type ModeleLettreInput = {
  add_by?: InputMaybe<Scalars['String']['input']>;
  date_derniere_modification?: InputMaybe<Scalars['DateTime']['input']>;
  date_publication: Scalars['DateTime']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  est_publie: Scalars['Int']['input'];
  etat: Scalars['String']['input'];
  nom: Scalars['String']['input'];
  observations?: InputMaybe<Scalars['String']['input']>;
  post_scriptum: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type ModeleLettreUpdateInput = {
  add_by?: InputMaybe<Scalars['String']['input']>;
  date_derniere_modification?: InputMaybe<Scalars['DateTime']['input']>;
  date_publication: Scalars['DateTime']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  est_publie: Scalars['Int']['input'];
  etat: Scalars['String']['input'];
  nom: Scalars['String']['input'];
  observations?: InputMaybe<Scalars['String']['input']>;
  post_scriptum: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createDemarche: Demarche;
  createDescripteur: Descripteur;
  createFaq: Faq;
  createFormulaire: Formulaire;
  createHub: Hub;
  createLienUtile: LienUtile;
  createModeleLettre: ModeleLettre;
  createServiceAdministratif: ServiceAdministratif;
  createSousTheme: SousTheme;
  createTexte: Texte;
  createTheme: Theme;
  createUser: User;
  register: Session;
  updateDemarche: Scalars['Boolean']['output'];
  updateDescripteur: Scalars['Boolean']['output'];
  updateFaq: Scalars['Boolean']['output'];
  updateFormulaire: Scalars['Boolean']['output'];
  updateHub: Scalars['Boolean']['output'];
  updateLienUtile: Scalars['Boolean']['output'];
  updateModeleLettre: Scalars['Boolean']['output'];
  updateServiceAdministratif: Scalars['Boolean']['output'];
  updateSousTheme: Scalars['Boolean']['output'];
  updateTexte: Scalars['Boolean']['output'];
  updateTheme: Scalars['Boolean']['output'];
  updateUser: Scalars['Boolean']['output'];
};


export type MutationCreateDemarcheArgs = {
  demarcheInput: DemarcheInput;
};


export type MutationCreateDescripteurArgs = {
  descripteurInput: DescripteurInput;
};


export type MutationCreateFaqArgs = {
  faqInput: FaqInput;
};


export type MutationCreateFormulaireArgs = {
  formulaireInput: FormulaireInput;
};


export type MutationCreateHubArgs = {
  hubInput: HubInput;
};


export type MutationCreateLienUtileArgs = {
  lienUtileInput: LienUtileInput;
};


export type MutationCreateModeleLettreArgs = {
  modeleLettreInput: ModeleLettreInput;
};


export type MutationCreateServiceAdministratifArgs = {
  serviceAdministratifInput: ServiceAdministratifInput;
};


export type MutationCreateSousThemeArgs = {
  sousThemeInput: SousThemeInput;
};


export type MutationCreateTexteArgs = {
  texteInput: TexteInput;
};


export type MutationCreateThemeArgs = {
  themeInput: ThemeInput;
};


export type MutationCreateUserArgs = {
  userInput: UserInput;
};


export type MutationRegisterArgs = {
  registerInput: RegisterInput;
};


export type MutationUpdateDemarcheArgs = {
  demarcheId: Scalars['ID']['input'];
  demarcheInput: DemarcheUpdateInput;
};


export type MutationUpdateDescripteurArgs = {
  descripteurId: Scalars['ID']['input'];
  descripteurInput: DescripteurUpdateInput;
};


export type MutationUpdateFaqArgs = {
  faqId: Scalars['ID']['input'];
  faqInput: FaqUpdateInput;
};


export type MutationUpdateFormulaireArgs = {
  formulaireId: Scalars['ID']['input'];
  formulaireInput: FormulaireUpdateInput;
};


export type MutationUpdateHubArgs = {
  hubId: Scalars['ID']['input'];
  hubInput: HubUpdateInput;
};


export type MutationUpdateLienUtileArgs = {
  lienUtileId: Scalars['ID']['input'];
  lienUtileInput: LienUtileUpdateInput;
};


export type MutationUpdateModeleLettreArgs = {
  modeleLettreId: Scalars['ID']['input'];
  modeleLettreInput: ModeleLettreUpdateInput;
};


export type MutationUpdateServiceAdministratifArgs = {
  serviceAdministratifId: Scalars['String']['input'];
  serviceAdministratifInput: ServiceAdministratifUpdateInput;
};


export type MutationUpdateSousThemeArgs = {
  sousThemeId: Scalars['ID']['input'];
  sousThemeInput: SousThemeUpdateInput;
};


export type MutationUpdateTexteArgs = {
  texteId: Scalars['ID']['input'];
  texteInput: TexteUpdateInput;
};


export type MutationUpdateThemeArgs = {
  themeId: Scalars['ID']['input'];
  themeInput: ThemeUpdateInput;
};


export type MutationUpdateUserArgs = {
  userId: Scalars['ID']['input'];
  userInput: UserUpdateInput;
};

/** Sort order */
export enum OrderByDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type OrderByInput = {
  direction: OrderByDirection;
  property: Scalars['String']['input'];
};

export type PaginatedDemarcheResult = {
  __typename?: 'PaginatedDemarcheResult';
  pagination: PaginationInfo;
  results: Array<Demarche>;
};

export type PaginatedDescripteurResult = {
  __typename?: 'PaginatedDescripteurResult';
  pagination: PaginationInfo;
  results: Array<Descripteur>;
};

export type PaginatedFaqResult = {
  __typename?: 'PaginatedFaqResult';
  pagination: PaginationInfo;
  results: Array<Faq>;
};

export type PaginatedFormulaireResult = {
  __typename?: 'PaginatedFormulaireResult';
  pagination: PaginationInfo;
  results: Array<Formulaire>;
};

export type PaginatedHubResult = {
  __typename?: 'PaginatedHubResult';
  pagination: PaginationInfo;
  results: Array<Hub>;
};

export type PaginatedLienUtileResult = {
  __typename?: 'PaginatedLienUtileResult';
  pagination: PaginationInfo;
  results: Array<LienUtile>;
};

export type PaginatedModeleLettreResult = {
  __typename?: 'PaginatedModeleLettreResult';
  pagination: PaginationInfo;
  results: Array<ModeleLettre>;
};

export type PaginatedServiceAdministratifResult = {
  __typename?: 'PaginatedServiceAdministratifResult';
  pagination: PaginationInfo;
  results: Array<ServiceAdministratif>;
};

export type PaginatedSousThemeResult = {
  __typename?: 'PaginatedSousThemeResult';
  pagination: PaginationInfo;
  results: Array<SousTheme>;
};

export type PaginatedTexteResult = {
  __typename?: 'PaginatedTexteResult';
  pagination: PaginationInfo;
  results: Array<Texte>;
};

export type PaginatedThemeResult = {
  __typename?: 'PaginatedThemeResult';
  pagination: PaginationInfo;
  results: Array<Theme>;
};

export type PaginationInfo = {
  __typename?: 'PaginationInfo';
  currentPage: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  totalItems: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  fetchAllDemarches: Demarche;
  fetchAllHubs: Hub;
  fetchDemarche: Demarche;
  fetchDemarches: PaginatedDemarcheResult;
  fetchDescripteur: Descripteur;
  fetchDescripteurs: PaginatedDescripteurResult;
  fetchFaq: Faq;
  fetchFaqs: PaginatedFaqResult;
  fetchFormulaire: Formulaire;
  fetchFormulaires: PaginatedFormulaireResult;
  fetchHub: Hub;
  fetchHubs: PaginatedHubResult;
  fetchLienUtile: LienUtile;
  fetchLienUtiles: PaginatedLienUtileResult;
  fetchModeleLettre: ModeleLettre;
  fetchModeleLettres: PaginatedModeleLettreResult;
  fetchServiceAdministratif: ServiceAdministratif;
  fetchServiceAdministratifs: PaginatedServiceAdministratifResult;
  fetchSousTheme: SousTheme;
  fetchSousThemes: PaginatedSousThemeResult;
  fetchTexte: Texte;
  fetchTextes: PaginatedTexteResult;
  fetchTheme: Theme;
  fetchThemes: PaginatedThemeResult;
  fetchUser: User;
  fetchUsers: Array<User>;
  login: Session;
};


export type QueryFetchAllDemarchesArgs = {
  queryFilter?: InputMaybe<QueryDataConfigInput>;
};


export type QueryFetchAllHubsArgs = {
  queryFilter?: InputMaybe<QueryDataConfigInput>;
};


export type QueryFetchDemarcheArgs = {
  demarcheId: Scalars['String']['input'];
};


export type QueryFetchDemarchesArgs = {
  demarcheFilter?: InputMaybe<DemarcheInputSearchInput>;
  queryFilter?: InputMaybe<QueryDataConfigInput>;
};


export type QueryFetchDescripteurArgs = {
  descripteurId: Scalars['String']['input'];
};


export type QueryFetchDescripteursArgs = {
  queryFilter?: InputMaybe<QueryDataConfigInput>;
};


export type QueryFetchFaqArgs = {
  faqId: Scalars['String']['input'];
};


export type QueryFetchFaqsArgs = {
  queryFilter?: InputMaybe<QueryDataConfigInput>;
};


export type QueryFetchFormulaireArgs = {
  formulaireId: Scalars['String']['input'];
};


export type QueryFetchFormulairesArgs = {
  queryFilter?: InputMaybe<QueryDataConfigInput>;
};


export type QueryFetchHubArgs = {
  hubId: Scalars['String']['input'];
};


export type QueryFetchHubsArgs = {
  hubFilter?: InputMaybe<HubInputSearchInput>;
  queryFilter?: InputMaybe<QueryDataConfigInput>;
};


export type QueryFetchLienUtileArgs = {
  lienUtileId: Scalars['String']['input'];
};


export type QueryFetchLienUtilesArgs = {
  queryFilter?: InputMaybe<QueryDataConfigInput>;
};


export type QueryFetchModeleLettreArgs = {
  modeleLettreId: Scalars['String']['input'];
};


export type QueryFetchModeleLettresArgs = {
  queryFilter?: InputMaybe<QueryDataConfigInput>;
};


export type QueryFetchServiceAdministratifArgs = {
  serviceAdministratifId: Scalars['String']['input'];
};


export type QueryFetchServiceAdministratifsArgs = {
  queryFilter?: InputMaybe<QueryDataConfigInput>;
};


export type QueryFetchSousThemeArgs = {
  sousThemeId: Scalars['String']['input'];
};


export type QueryFetchSousThemesArgs = {
  queryFilter?: InputMaybe<QueryDataConfigInput>;
};


export type QueryFetchTexteArgs = {
  texteId: Scalars['String']['input'];
};


export type QueryFetchTextesArgs = {
  queryFilter?: InputMaybe<QueryDataConfigInput>;
};


export type QueryFetchThemeArgs = {
  themeId: Scalars['String']['input'];
};


export type QueryFetchThemesArgs = {
  queryFilter?: InputMaybe<QueryDataConfigInput>;
};


export type QueryFetchUserArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryLoginArgs = {
  loginInput: LoginInput;
};

export type QueryDataConfigInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderByInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type RegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type ServiceAdministratif = {
  __typename?: 'ServiceAdministratif';
  acces?: Maybe<Scalars['String']['output']>;
  adresse?: Maybe<Scalars['String']['output']>;
  altitude?: Maybe<Scalars['Float']['output']>;
  boite_postale?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  est_publie: Scalars['Int']['output'];
  etat: Scalars['String']['output'];
  fax?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  nom: Scalars['String']['output'];
  observations?: Maybe<Scalars['String']['output']>;
  parent_id?: Maybe<Scalars['Int']['output']>;
  pays_id?: Maybe<Scalars['Int']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  remarque?: Maybe<Scalars['String']['output']>;
  sigle: Scalars['String']['output'];
  site_web?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  telephone?: Maybe<Scalars['String']['output']>;
  type_service?: Maybe<Scalars['String']['output']>;
  ville?: Maybe<Scalars['String']['output']>;
};

export type ServiceAdministratifInput = {
  _id: Scalars['Int']['input'];
  acces?: InputMaybe<Scalars['String']['input']>;
  adresse?: InputMaybe<Scalars['String']['input']>;
  altitude?: InputMaybe<Scalars['Float']['input']>;
  boite_postale?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  est_publie: Scalars['Int']['input'];
  etat: Scalars['String']['input'];
  fax?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  nom: Scalars['String']['input'];
  observations?: InputMaybe<Scalars['String']['input']>;
  parent_id?: InputMaybe<Scalars['Int']['input']>;
  pays_id?: InputMaybe<Scalars['Int']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  remarque?: InputMaybe<Scalars['String']['input']>;
  sigle: Scalars['String']['input'];
  site_web?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
  telephone?: InputMaybe<Scalars['String']['input']>;
  type_service?: InputMaybe<Scalars['String']['input']>;
  ville?: InputMaybe<Scalars['String']['input']>;
};

export type ServiceAdministratifUpdateInput = {
  _id: Scalars['Int']['input'];
  acces?: InputMaybe<Scalars['String']['input']>;
  adresse?: InputMaybe<Scalars['String']['input']>;
  altitude?: InputMaybe<Scalars['Float']['input']>;
  boite_postale?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  est_publie: Scalars['Int']['input'];
  etat: Scalars['String']['input'];
  fax?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  nom: Scalars['String']['input'];
  observations?: InputMaybe<Scalars['String']['input']>;
  parent_id?: InputMaybe<Scalars['Int']['input']>;
  pays_id?: InputMaybe<Scalars['Int']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  remarque?: InputMaybe<Scalars['String']['input']>;
  sigle: Scalars['String']['input'];
  site_web?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
  telephone?: InputMaybe<Scalars['String']['input']>;
  type_service?: InputMaybe<Scalars['String']['input']>;
  ville?: InputMaybe<Scalars['String']['input']>;
};

export type Session = {
  __typename?: 'Session';
  token: Scalars['String']['output'];
  user: User;
};

export type SousTheme = {
  __typename?: 'SousTheme';
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  libelle: Scalars['String']['output'];
  ordre?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  themes: Array<Theme>;
};

export type SousThemeInput = {
  icon?: InputMaybe<Scalars['String']['input']>;
  libelle: Scalars['String']['input'];
  ordre?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
  themes: Array<Scalars['String']['input']>;
};

export type SousThemeUpdateInput = {
  icon?: InputMaybe<Scalars['String']['input']>;
  libelle?: InputMaybe<Scalars['String']['input']>;
  ordre?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  themes: Array<Scalars['String']['input']>;
};

export type Texte = {
  __typename?: 'Texte';
  date_publication?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  est_publie: Scalars['Int']['output'];
  etat: Scalars['String']['output'];
  fichier?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  nom: Scalars['String']['output'];
  observations?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  type_texte_id: Scalars['Int']['output'];
  url: Scalars['String']['output'];
};

export type TexteInput = {
  date_publication?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  est_publie: Scalars['Int']['input'];
  etat: Scalars['String']['input'];
  fichier?: InputMaybe<Scalars['String']['input']>;
  nom: Scalars['String']['input'];
  observations?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
  type_texte_id: Scalars['Int']['input'];
  url: Scalars['String']['input'];
};

export type TexteUpdateInput = {
  date_publication?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  est_publie: Scalars['Int']['input'];
  etat: Scalars['String']['input'];
  fichier?: InputMaybe<Scalars['String']['input']>;
  nom: Scalars['String']['input'];
  observations?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
  type_texte_id: Scalars['Int']['input'];
  url: Scalars['String']['input'];
};

export type Theme = {
  __typename?: 'Theme';
  couleur?: Maybe<Scalars['String']['output']>;
  espace_id?: Maybe<Scalars['Int']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  libelle: Scalars['String']['output'];
  line_icon?: Maybe<Scalars['String']['output']>;
  ordre: Scalars['Int']['output'];
  slug: Scalars['String']['output'];
};

export type ThemeInput = {
  couleur?: InputMaybe<Scalars['String']['input']>;
  espace_id?: InputMaybe<Scalars['Int']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  libelle: Scalars['String']['input'];
  line_icon?: InputMaybe<Scalars['String']['input']>;
  ordre: Scalars['Int']['input'];
  slug: Scalars['String']['input'];
};

export type ThemeUpdateInput = {
  couleur?: InputMaybe<Scalars['String']['input']>;
  espace_id?: InputMaybe<Scalars['Int']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  libelle: Scalars['String']['input'];
  line_icon?: InputMaybe<Scalars['String']['input']>;
  ordre: Scalars['Int']['input'];
  slug: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type UserInput = {
  id: Scalars['String']['input'];
};

export type UserUpdateInput = {
  id: Scalars['String']['input'];
};

export type RegisterMutationVariables = Exact<{
  registerInput: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'Session', token: string, user: { __typename?: 'User', id: string } } };

export type LoginQueryVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginQuery = { __typename?: 'Query', login: { __typename?: 'Session', token: string, user: { __typename?: 'User', id: string } } };

export type FetchDemarchesQueryVariables = Exact<{
  queryFilter?: InputMaybe<QueryDataConfigInput>;
  demarcheFilter?: InputMaybe<DemarcheInputSearchInput>;
}>;


export type FetchDemarchesQuery = { __typename?: 'Query', fetchDemarches: { __typename?: 'PaginatedDemarcheResult', pagination: { __typename?: 'PaginationInfo', totalItems: number, pageCount: number, pageSize: number, currentPage: number }, results: Array<{ __typename?: 'Demarche', id: any, titre: string, resume?: string | null, updatedAt: any, etat?: string | null, est_publie?: boolean | null, observations?: string | null, sous_themes: Array<{ __typename?: 'SousTheme', id: string, libelle: string, slug: string }> }> } };

export type SearchDemarchesQueryVariables = Exact<{
  queryFilter?: InputMaybe<QueryDataConfigInput>;
}>;


export type SearchDemarchesQuery = { __typename?: 'Query', searchResults: { __typename?: 'PaginatedDemarcheResult', pagination: { __typename?: 'PaginationInfo', totalItems: number, pageCount: number, pageSize: number, currentPage: number }, results: Array<{ __typename?: 'Demarche', id: any, nom: string }> } };

export type CreateDemarcheMutationVariables = Exact<{
  demarcheInput: DemarcheInput;
}>;


export type CreateDemarcheMutation = { __typename?: 'Mutation', createDemarche: { __typename?: 'Demarche', id: any, titre: string, url?: string | null, cout?: number | null, corps?: string | null, mot_cle?: string | null, delai?: number | null, description: string, resume?: string | null, a_la_une?: boolean | null, slug: string, observations?: string | null, post_scriptum?: string | null, etat?: string | null, est_publie?: boolean | null, teleprocedure?: boolean | null, sous_themes: Array<{ __typename?: 'SousTheme', id: string, libelle: string }>, service_administratifs: Array<{ __typename?: 'ServiceAdministratif', id: number, nom: string }>, formulaires: Array<{ __typename?: 'Formulaire', id: number, nom: string }>, faqs: Array<{ __typename?: 'Faq', id: number, question: string }>, descripteurs: Array<{ __typename?: 'Descripteur', id: number, libelle: string }>, modele_lettres: Array<{ __typename?: 'ModeleLettre', id: number, nom: string }>, textes: Array<{ __typename?: 'Texte', id: number, nom: string }>, lien_utiles: Array<{ __typename?: 'LienUtile', id: number, nom: string }> } };

export type FetchDemarcheQueryVariables = Exact<{
  demarcheId: Scalars['String']['input'];
}>;


export type FetchDemarcheQuery = { __typename?: 'Query', fetchDemarche: { __typename?: 'Demarche', id: any, titre: string, url?: string | null, cout?: number | null, corps?: string | null, mot_cle?: string | null, delai?: number | null, description: string, resume?: string | null, a_la_une?: boolean | null, slug: string, observations?: string | null, post_scriptum?: string | null, etat?: string | null, est_publie?: boolean | null, teleprocedure?: boolean | null, service_administratifs: Array<{ __typename?: 'ServiceAdministratif', id: number, nom: string }>, sous_themes: Array<{ __typename?: 'SousTheme', id: string, nom: string }>, formulaires: Array<{ __typename?: 'Formulaire', id: number, nom: string }>, faqs: Array<{ __typename?: 'Faq', id: number, nom: string }>, descripteurs: Array<{ __typename?: 'Descripteur', id: number, nom: string }>, modele_lettres: Array<{ __typename?: 'ModeleLettre', id: number, nom: string }>, textes: Array<{ __typename?: 'Texte', id: number, nom: string }>, lien_utiles: Array<{ __typename?: 'LienUtile', id: number, nom: string }>, demarches: Array<{ __typename?: 'Demarche', id: any, nom: string }> } };

export type FetchDescripteursQueryVariables = Exact<{
  queryFilter?: InputMaybe<QueryDataConfigInput>;
}>;


export type FetchDescripteursQuery = { __typename?: 'Query', fetchDescripteurs: { __typename?: 'PaginatedDescripteurResult', pagination: { __typename?: 'PaginationInfo', totalItems: number, pageCount: number, currentPage: number, pageSize: number }, results: Array<{ __typename?: 'Descripteur', id: number, libelle: string, status: number }> } };

export type SearchDescripteursQueryVariables = Exact<{
  queryFilter?: InputMaybe<QueryDataConfigInput>;
}>;


export type SearchDescripteursQuery = { __typename?: 'Query', searchResults: { __typename?: 'PaginatedDescripteurResult', pagination: { __typename?: 'PaginationInfo', totalItems: number, pageCount: number, currentPage: number, pageSize: number }, results: Array<{ __typename?: 'Descripteur', id: number, nom: string }> } };

export type FetchFaqsQueryVariables = Exact<{
  queryFilter?: InputMaybe<QueryDataConfigInput>;
}>;


export type FetchFaqsQuery = { __typename?: 'Query', fetchFaqs: { __typename?: 'PaginatedFaqResult', pagination: { __typename?: 'PaginationInfo', totalItems: number, pageCount: number, currentPage: number, pageSize: number }, results: Array<{ __typename?: 'Faq', id: number, question: string, reponse: string }> } };

export type SearchFaqsQueryVariables = Exact<{
  queryFilter?: InputMaybe<QueryDataConfigInput>;
}>;


export type SearchFaqsQuery = { __typename?: 'Query', searchResults: { __typename?: 'PaginatedFaqResult', pagination: { __typename?: 'PaginationInfo', totalItems: number, pageCount: number, currentPage: number, pageSize: number }, results: Array<{ __typename?: 'Faq', id: number, nom: string }> } };

export type FetchModeleLettresQueryVariables = Exact<{
  queryFilter?: InputMaybe<QueryDataConfigInput>;
}>;


export type FetchModeleLettresQuery = { __typename?: 'Query', fetchModeleLettres: { __typename?: 'PaginatedModeleLettreResult', pagination: { __typename?: 'PaginationInfo', totalItems: number, pageCount: number, currentPage: number, pageSize: number }, results: Array<{ __typename?: 'ModeleLettre', id: number, nom: string, slug: string }> } };

export type SearchFormulairesQueryVariables = Exact<{
  queryFilter?: InputMaybe<QueryDataConfigInput>;
}>;


export type SearchFormulairesQuery = { __typename?: 'Query', searchResults: { __typename?: 'PaginatedFormulaireResult', pagination: { __typename?: 'PaginationInfo', totalItems: number, pageCount: number, currentPage: number, pageSize: number }, results: Array<{ __typename?: 'Formulaire', id: number, nom: string }> } };

export type FetchLienUtilesQueryVariables = Exact<{
  queryFilter?: InputMaybe<QueryDataConfigInput>;
}>;


export type FetchLienUtilesQuery = { __typename?: 'Query', fetchLienUtiles: { __typename?: 'PaginatedLienUtileResult', pagination: { __typename?: 'PaginationInfo', totalItems: number, pageCount: number, currentPage: number, pageSize: number }, results: Array<{ __typename?: 'LienUtile', id: number, nom: string, description?: string | null, url: string, est_publie: number }> } };

export type SearchLienUtilesQueryVariables = Exact<{
  queryFilter?: InputMaybe<QueryDataConfigInput>;
}>;


export type SearchLienUtilesQuery = { __typename?: 'Query', searchResults: { __typename?: 'PaginatedLienUtileResult', pagination: { __typename?: 'PaginationInfo', totalItems: number, pageCount: number, currentPage: number, pageSize: number }, results: Array<{ __typename?: 'LienUtile', id: number, nom: string }> } };

export type SearchModeleLettresQueryVariables = Exact<{
  queryFilter?: InputMaybe<QueryDataConfigInput>;
}>;


export type SearchModeleLettresQuery = { __typename?: 'Query', searchResults: { __typename?: 'PaginatedModeleLettreResult', pagination: { __typename?: 'PaginationInfo', totalItems: number, pageCount: number, currentPage: number, pageSize: number }, results: Array<{ __typename?: 'ModeleLettre', id: number, nom: string, slug: string }> } };

export type FetchServiceAdministratifsQueryVariables = Exact<{
  queryFilter?: InputMaybe<QueryDataConfigInput>;
}>;


export type FetchServiceAdministratifsQuery = { __typename?: 'Query', fetchServiceAdministratifs: { __typename?: 'PaginatedServiceAdministratifResult', pagination: { __typename?: 'PaginationInfo', totalItems: number, pageCount: number, currentPage: number, pageSize: number }, results: Array<{ __typename?: 'ServiceAdministratif', id: number, nom: string }> } };

export type SearchServiceAdministratifsQueryVariables = Exact<{
  queryFilter?: InputMaybe<QueryDataConfigInput>;
}>;


export type SearchServiceAdministratifsQuery = { __typename?: 'Query', searchResults: { __typename?: 'PaginatedServiceAdministratifResult', pagination: { __typename?: 'PaginationInfo', totalItems: number, pageCount: number, currentPage: number, pageSize: number }, results: Array<{ __typename?: 'ServiceAdministratif', id: number, nom: string }> } };

export type FetchTextesQueryVariables = Exact<{
  queryFilter?: InputMaybe<QueryDataConfigInput>;
}>;


export type FetchTextesQuery = { __typename?: 'Query', fetchTextes: { __typename?: 'PaginatedTexteResult', pagination: { __typename?: 'PaginationInfo', totalItems: number, pageCount: number, currentPage: number, pageSize: number }, results: Array<{ __typename?: 'Texte', id: number, nom: string, slug: string, description?: string | null, url: string, est_publie: number }> } };

export type SearchTextesQueryVariables = Exact<{
  queryFilter?: InputMaybe<QueryDataConfigInput>;
}>;


export type SearchTextesQuery = { __typename?: 'Query', searchResults: { __typename?: 'PaginatedTexteResult', pagination: { __typename?: 'PaginationInfo', totalItems: number, pageCount: number, currentPage: number, pageSize: number }, results: Array<{ __typename?: 'Texte', id: number, nom: string }> } };

export type FetchSousThemesQueryVariables = Exact<{
  queryFilter?: InputMaybe<QueryDataConfigInput>;
}>;


export type FetchSousThemesQuery = { __typename?: 'Query', fetchSousThemes: { __typename?: 'PaginatedSousThemeResult', pagination: { __typename?: 'PaginationInfo', totalItems: number, pageCount: number, currentPage: number, pageSize: number }, results: Array<{ __typename?: 'SousTheme', id: string, slug: string, libelle: string, ordre?: string | null, icon?: string | null, themes: Array<{ __typename?: 'Theme', id: number, libelle: string }> }> } };

export type SearchSousThemesQueryVariables = Exact<{
  queryFilter?: InputMaybe<QueryDataConfigInput>;
}>;


export type SearchSousThemesQuery = { __typename?: 'Query', searchResults: { __typename?: 'PaginatedSousThemeResult', pagination: { __typename?: 'PaginationInfo', totalItems: number, pageCount: number, currentPage: number, pageSize: number }, results: Array<{ __typename?: 'SousTheme', id: string, nom: string }> } };

export type FetchThemesQueryVariables = Exact<{
  queryFilter?: InputMaybe<QueryDataConfigInput>;
}>;


export type FetchThemesQuery = { __typename?: 'Query', fetchThemes: { __typename?: 'PaginatedThemeResult', pagination: { __typename?: 'PaginationInfo', totalItems: number, pageCount: number, currentPage: number, pageSize: number }, results: Array<{ __typename?: 'Theme', id: number, slug: string, libelle: string, espace_id?: number | null, couleur?: string | null, ordre: number, icon?: string | null, line_icon?: string | null }> } };

export type FetchHubsQueryVariables = Exact<{
  queryFilter?: InputMaybe<QueryDataConfigInput>;
  hubFilter?: InputMaybe<HubInputSearchInput>;
}>;


export type FetchHubsQuery = { __typename?: 'Query', fetchHubs: { __typename?: 'PaginatedHubResult', pagination: { __typename?: 'PaginationInfo', totalItems: number, pageCount: number, pageSize: number, currentPage: number }, results: Array<{ __typename?: 'Hub', id: any, titre: string, resume?: string | null, updatedAt: any, etat?: string | null, est_publie?: boolean | null, observations?: string | null, a_la_une?: boolean | null, sous_themes: Array<{ __typename?: 'SousTheme', id: string, libelle: string, slug: string }> }> } };

export type SearchHubsQueryVariables = Exact<{
  queryFilter?: InputMaybe<QueryDataConfigInput>;
}>;


export type SearchHubsQuery = { __typename?: 'Query', searchResults: { __typename?: 'PaginatedHubResult', pagination: { __typename?: 'PaginationInfo', totalItems: number, pageCount: number, pageSize: number, currentPage: number }, results: Array<{ __typename?: 'Hub', id: any, nom: string }> } };

export type CreateHubMutationVariables = Exact<{
  hubInput: HubInput;
}>;


export type CreateHubMutation = { __typename?: 'Mutation', createHub: { __typename?: 'Hub', id: any, titre: string, mot_cle?: string | null, description: string, resume?: string | null, slug: string, observations?: string | null, etat?: string | null, est_publie?: boolean | null, a_la_une?: boolean | null, sous_themes: Array<{ __typename?: 'SousTheme', id: string, libelle: string }>, service_administratifs: Array<{ __typename?: 'ServiceAdministratif', id: number, nom: string }>, formulaires: Array<{ __typename?: 'Formulaire', id: number, nom: string }>, faqs: Array<{ __typename?: 'Faq', id: number, question: string }>, descripteurs: Array<{ __typename?: 'Descripteur', id: number, libelle: string }>, modele_lettres: Array<{ __typename?: 'ModeleLettre', id: number, nom: string }>, textes: Array<{ __typename?: 'Texte', id: number, nom: string }>, lien_utiles: Array<{ __typename?: 'LienUtile', id: number, nom: string }> } };

export type FetchHubQueryVariables = Exact<{
  hubId: Scalars['String']['input'];
}>;


export type FetchHubQuery = { __typename?: 'Query', fetchHub: { __typename?: 'Hub', id: any, titre: string, mot_cle?: string | null, description: string, resume?: string | null, slug: string, observations?: string | null, etat?: string | null, est_publie?: boolean | null, a_la_une?: boolean | null, service_administratifs: Array<{ __typename?: 'ServiceAdministratif', id: number, nom: string }>, sous_themes: Array<{ __typename?: 'SousTheme', id: string, nom: string }>, formulaires: Array<{ __typename?: 'Formulaire', id: number, nom: string }>, faqs: Array<{ __typename?: 'Faq', id: number, nom: string }>, descripteurs: Array<{ __typename?: 'Descripteur', id: number, nom: string }>, modele_lettres: Array<{ __typename?: 'ModeleLettre', id: number, nom: string }>, textes: Array<{ __typename?: 'Texte', id: number, nom: string }>, lien_utiles: Array<{ __typename?: 'LienUtile', id: number, nom: string }> } };

export const RegisterDocument = gql`
    mutation Register($registerInput: RegisterInput!) {
  register(registerInput: $registerInput) {
    token
    user {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RegisterGQL extends Apollo.Mutation<RegisterMutation, RegisterMutationVariables> {
    document = RegisterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LoginDocument = gql`
    query Login($loginInput: LoginInput!) {
  login(loginInput: $loginInput) {
    token
    user {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Query<LoginQuery, LoginQueryVariables> {
    document = LoginDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FetchDemarchesDocument = gql`
    query FetchDemarches($queryFilter: QueryDataConfigInput, $demarcheFilter: DemarcheInputSearchInput) {
  fetchDemarches(queryFilter: $queryFilter, demarcheFilter: $demarcheFilter) {
    pagination {
      totalItems
      pageCount
      pageSize
      currentPage
    }
    results {
      id
      titre
      resume
      updatedAt
      etat
      est_publie
      observations
      sous_themes {
        id
        libelle
        slug
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FetchDemarchesGQL extends Apollo.Query<FetchDemarchesQuery, FetchDemarchesQueryVariables> {
    document = FetchDemarchesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SearchDemarchesDocument = gql`
    query SearchDemarches($queryFilter: QueryDataConfigInput) {
  searchResults: fetchDemarches(queryFilter: $queryFilter) {
    pagination {
      totalItems
      pageCount
      pageSize
      currentPage
    }
    results {
      id
      nom: titre
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SearchDemarchesGQL extends Apollo.Query<SearchDemarchesQuery, SearchDemarchesQueryVariables> {
    document = SearchDemarchesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateDemarcheDocument = gql`
    mutation CreateDemarche($demarcheInput: DemarcheInput!) {
  createDemarche(demarcheInput: $demarcheInput) {
    id
    titre
    url
    cout
    corps
    mot_cle
    delai
    description
    resume
    a_la_une
    slug
    observations
    post_scriptum
    etat
    est_publie
    teleprocedure
    sous_themes {
      id
      libelle
    }
    service_administratifs {
      id
      nom
    }
    formulaires {
      id
      nom
    }
    faqs {
      id
      question
    }
    descripteurs {
      id
      libelle
    }
    modele_lettres {
      id
      nom
    }
    textes {
      id
      nom
    }
    lien_utiles {
      id
      nom
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateDemarcheGQL extends Apollo.Mutation<CreateDemarcheMutation, CreateDemarcheMutationVariables> {
    document = CreateDemarcheDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FetchDemarcheDocument = gql`
    query FetchDemarche($demarcheId: String!) {
  fetchDemarche(demarcheId: $demarcheId) {
    id
    titre
    url
    cout
    corps
    mot_cle
    delai
    description
    resume
    a_la_une
    slug
    observations
    post_scriptum
    etat
    est_publie
    teleprocedure
    service_administratifs {
      id
      nom
    }
    sous_themes {
      id
      nom: libelle
    }
    formulaires {
      id
      nom
    }
    faqs {
      id
      nom: question
    }
    descripteurs {
      id
      nom: libelle
    }
    modele_lettres {
      id
      nom: nom
    }
    textes {
      id
      nom
    }
    lien_utiles {
      id
      nom
    }
    demarches {
      id
      nom: titre
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FetchDemarcheGQL extends Apollo.Query<FetchDemarcheQuery, FetchDemarcheQueryVariables> {
    document = FetchDemarcheDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FetchDescripteursDocument = gql`
    query FetchDescripteurs($queryFilter: QueryDataConfigInput) {
  fetchDescripteurs(queryFilter: $queryFilter) {
    pagination {
      totalItems
      pageCount
      currentPage
      pageSize
    }
    results {
      id
      libelle
      status
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FetchDescripteursGQL extends Apollo.Query<FetchDescripteursQuery, FetchDescripteursQueryVariables> {
    document = FetchDescripteursDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SearchDescripteursDocument = gql`
    query SearchDescripteurs($queryFilter: QueryDataConfigInput) {
  searchResults: fetchDescripteurs(queryFilter: $queryFilter) {
    pagination {
      totalItems
      pageCount
      currentPage
      pageSize
    }
    results {
      id
      nom: libelle
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SearchDescripteursGQL extends Apollo.Query<SearchDescripteursQuery, SearchDescripteursQueryVariables> {
    document = SearchDescripteursDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FetchFaqsDocument = gql`
    query FetchFaqs($queryFilter: QueryDataConfigInput) {
  fetchFaqs(queryFilter: $queryFilter) {
    pagination {
      totalItems
      pageCount
      currentPage
      pageSize
    }
    results {
      id
      question
      reponse
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FetchFaqsGQL extends Apollo.Query<FetchFaqsQuery, FetchFaqsQueryVariables> {
    document = FetchFaqsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SearchFaqsDocument = gql`
    query SearchFaqs($queryFilter: QueryDataConfigInput) {
  searchResults: fetchFaqs(queryFilter: $queryFilter) {
    pagination {
      totalItems
      pageCount
      currentPage
      pageSize
    }
    results {
      id
      nom: question
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SearchFaqsGQL extends Apollo.Query<SearchFaqsQuery, SearchFaqsQueryVariables> {
    document = SearchFaqsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FetchModeleLettresDocument = gql`
    query FetchModeleLettres($queryFilter: QueryDataConfigInput) {
  fetchModeleLettres(queryFilter: $queryFilter) {
    pagination {
      totalItems
      pageCount
      currentPage
      pageSize
    }
    results {
      id
      nom
      slug
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FetchModeleLettresGQL extends Apollo.Query<FetchModeleLettresQuery, FetchModeleLettresQueryVariables> {
    document = FetchModeleLettresDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SearchFormulairesDocument = gql`
    query SearchFormulaires($queryFilter: QueryDataConfigInput) {
  searchResults: fetchFormulaires(queryFilter: $queryFilter) {
    pagination {
      totalItems
      pageCount
      currentPage
      pageSize
    }
    results {
      id
      nom
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SearchFormulairesGQL extends Apollo.Query<SearchFormulairesQuery, SearchFormulairesQueryVariables> {
    document = SearchFormulairesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FetchLienUtilesDocument = gql`
    query FetchLienUtiles($queryFilter: QueryDataConfigInput) {
  fetchLienUtiles(queryFilter: $queryFilter) {
    pagination {
      totalItems
      pageCount
      currentPage
      pageSize
    }
    results {
      id
      nom
      description
      url
      est_publie
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FetchLienUtilesGQL extends Apollo.Query<FetchLienUtilesQuery, FetchLienUtilesQueryVariables> {
    document = FetchLienUtilesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SearchLienUtilesDocument = gql`
    query SearchLienUtiles($queryFilter: QueryDataConfigInput) {
  searchResults: fetchLienUtiles(queryFilter: $queryFilter) {
    pagination {
      totalItems
      pageCount
      currentPage
      pageSize
    }
    results {
      id
      nom
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SearchLienUtilesGQL extends Apollo.Query<SearchLienUtilesQuery, SearchLienUtilesQueryVariables> {
    document = SearchLienUtilesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SearchModeleLettresDocument = gql`
    query SearchModeleLettres($queryFilter: QueryDataConfigInput) {
  searchResults: fetchModeleLettres(queryFilter: $queryFilter) {
    pagination {
      totalItems
      pageCount
      currentPage
      pageSize
    }
    results {
      id
      nom
      slug
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SearchModeleLettresGQL extends Apollo.Query<SearchModeleLettresQuery, SearchModeleLettresQueryVariables> {
    document = SearchModeleLettresDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FetchServiceAdministratifsDocument = gql`
    query FetchServiceAdministratifs($queryFilter: QueryDataConfigInput) {
  fetchServiceAdministratifs(queryFilter: $queryFilter) {
    pagination {
      totalItems
      pageCount
      currentPage
      pageSize
    }
    results {
      id
      nom
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FetchServiceAdministratifsGQL extends Apollo.Query<FetchServiceAdministratifsQuery, FetchServiceAdministratifsQueryVariables> {
    document = FetchServiceAdministratifsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SearchServiceAdministratifsDocument = gql`
    query SearchServiceAdministratifs($queryFilter: QueryDataConfigInput) {
  searchResults: fetchServiceAdministratifs(queryFilter: $queryFilter) {
    pagination {
      totalItems
      pageCount
      currentPage
      pageSize
    }
    results {
      id
      nom
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SearchServiceAdministratifsGQL extends Apollo.Query<SearchServiceAdministratifsQuery, SearchServiceAdministratifsQueryVariables> {
    document = SearchServiceAdministratifsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FetchTextesDocument = gql`
    query FetchTextes($queryFilter: QueryDataConfigInput) {
  fetchTextes(queryFilter: $queryFilter) {
    pagination {
      totalItems
      pageCount
      currentPage
      pageSize
    }
    results {
      id
      nom
      slug
      description
      url
      est_publie
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FetchTextesGQL extends Apollo.Query<FetchTextesQuery, FetchTextesQueryVariables> {
    document = FetchTextesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SearchTextesDocument = gql`
    query SearchTextes($queryFilter: QueryDataConfigInput) {
  searchResults: fetchTextes(queryFilter: $queryFilter) {
    pagination {
      totalItems
      pageCount
      currentPage
      pageSize
    }
    results {
      id
      nom
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SearchTextesGQL extends Apollo.Query<SearchTextesQuery, SearchTextesQueryVariables> {
    document = SearchTextesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FetchSousThemesDocument = gql`
    query FetchSousThemes($queryFilter: QueryDataConfigInput) {
  fetchSousThemes(queryFilter: $queryFilter) {
    pagination {
      totalItems
      pageCount
      currentPage
      pageSize
    }
    results {
      id
      slug
      libelle
      ordre
      icon
      themes {
        id
        libelle
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FetchSousThemesGQL extends Apollo.Query<FetchSousThemesQuery, FetchSousThemesQueryVariables> {
    document = FetchSousThemesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SearchSousThemesDocument = gql`
    query SearchSousThemes($queryFilter: QueryDataConfigInput) {
  searchResults: fetchSousThemes(queryFilter: $queryFilter) {
    pagination {
      totalItems
      pageCount
      currentPage
      pageSize
    }
    results {
      id
      nom: libelle
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SearchSousThemesGQL extends Apollo.Query<SearchSousThemesQuery, SearchSousThemesQueryVariables> {
    document = SearchSousThemesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FetchThemesDocument = gql`
    query FetchThemes($queryFilter: QueryDataConfigInput) {
  fetchThemes(queryFilter: $queryFilter) {
    pagination {
      totalItems
      pageCount
      currentPage
      pageSize
    }
    results {
      id
      slug
      libelle
      espace_id
      couleur
      ordre
      icon
      line_icon
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FetchThemesGQL extends Apollo.Query<FetchThemesQuery, FetchThemesQueryVariables> {
    document = FetchThemesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FetchHubsDocument = gql`
    query FetchHubs($queryFilter: QueryDataConfigInput, $hubFilter: HubInputSearchInput) {
  fetchHubs(queryFilter: $queryFilter, hubFilter: $hubFilter) {
    pagination {
      totalItems
      pageCount
      pageSize
      currentPage
    }
    results {
      id
      titre
      resume
      updatedAt
      etat
      est_publie
      observations
      a_la_une
      sous_themes {
        id
        libelle
        slug
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FetchHubsGQL extends Apollo.Query<FetchHubsQuery, FetchHubsQueryVariables> {
    document = FetchHubsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SearchHubsDocument = gql`
    query SearchHubs($queryFilter: QueryDataConfigInput) {
  searchResults: fetchHubs(queryFilter: $queryFilter) {
    pagination {
      totalItems
      pageCount
      pageSize
      currentPage
    }
    results {
      id
      nom: titre
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SearchHubsGQL extends Apollo.Query<SearchHubsQuery, SearchHubsQueryVariables> {
    document = SearchHubsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateHubDocument = gql`
    mutation CreateHub($hubInput: HubInput!) {
  createHub(hubInput: $hubInput) {
    id
    titre
    mot_cle
    description
    resume
    slug
    observations
    etat
    est_publie
    a_la_une
    sous_themes {
      id
      libelle
    }
    service_administratifs {
      id
      nom
    }
    formulaires {
      id
      nom
    }
    faqs {
      id
      question
    }
    descripteurs {
      id
      libelle
    }
    modele_lettres {
      id
      nom
    }
    textes {
      id
      nom
    }
    lien_utiles {
      id
      nom
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateHubGQL extends Apollo.Mutation<CreateHubMutation, CreateHubMutationVariables> {
    document = CreateHubDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FetchHubDocument = gql`
    query FetchHub($hubId: String!) {
  fetchHub(hubId: $hubId) {
    id
    titre
    mot_cle
    description
    resume
    slug
    observations
    etat
    est_publie
    a_la_une
    service_administratifs {
      id
      nom
    }
    sous_themes {
      id
      nom: libelle
    }
    formulaires {
      id
      nom
    }
    faqs {
      id
      nom: question
    }
    descripteurs {
      id
      nom: libelle
    }
    modele_lettres {
      id
      nom: nom
    }
    textes {
      id
      nom
    }
    lien_utiles {
      id
      nom
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FetchHubGQL extends Apollo.Query<FetchHubQuery, FetchHubQueryVariables> {
    document = FetchHubDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }