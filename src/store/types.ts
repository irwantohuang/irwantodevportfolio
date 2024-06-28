import { DataState } from './modules/data'
import { ModalState } from './modules/modal'


export interface RootState {
    data: DataState
    modal: ModalState
}