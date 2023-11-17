import { SnackbarKey } from "notistack"

export interface UserType {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
}

export interface UserCardPropsType {
  user: UserType
}

export interface PaginationPropsType {
  currentPage: number,
  totalPages: number,
  onPageChange: (page: number) => void
}

export interface CloseSnackbarProps {
  id?: SnackbarKey;
}

export type ParamType = {
  id?: string
}

export interface CardStyledComponentPropType {
  bgColor?: string
}

export interface ImageStyledComponentPropType {
  color?: string,
  height?: string
}

export interface PaginationButtonStyledComponentPropType {
  active?: boolean
}

export interface CardLoaderStyledComponentPropType {
  height?: string,
  width?: string
}

export interface DetailUserLoaderPropType {
  color: string
}