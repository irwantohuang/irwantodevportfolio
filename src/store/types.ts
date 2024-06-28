import { DataState } from './modules/data'
import { LoaderState } from './modules/loaders'
import { ModalState } from './modules/modal'


export interface RootState {
    data: DataState
    modal: ModalState,
    loader: LoaderState
}