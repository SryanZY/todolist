import Vuex from 'vuex'
import defaultState from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import createLogger from 'vuex/dist/logger'

const debug = process.env.NODE_ENV !== 'production'

export default () => {
    return new Vuex.Store({
        state: defaultState,
        mutations,
        getters,
        actions,
        modules: {
            a: {
                state: {
                    text: 1
                },
                mutations: {
                    updateText (state, text) {
                        state.text = text
                    }
                }
            },
            b: {
                state: {
                    text: 2
                }
            }
        },
        strict: debug,
        plugins: debug ? [createLogger()] : []
    })
}
