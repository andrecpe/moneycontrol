import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
        state: {
            RS200: "",
            RS100: "",
            RS50: "",
            RS20: "",
            RS10: "",
            RS5: "",
            RS2: "",
            RS1: "",
            RS050: "",
            RS025: "",
            RS010: "",
            RS005: "",

            TRS200: 0,
            TRS100: 0,
            TRS50: 0,
            TRS20: 0,
            TRS10: 0,
            TRS5: 0,
            TRS2: 0,
            TRS1: 0,
            TRS050: 0,
            TRS025: 0,
            TRS010: 0,
            TRS005: 0,

            history: [
                // {
                //     tipo: "", // recebe || dispensa
                //     datahora: "",
                //     mov: {
                //         rs200: "",
                //         rs100: "",
                //         rs50: "",
                //         rs20: "",
                //         rs10: "",
                //         rs5: "",
                //         rs2: "",
                //         rs1: "",
                //         rs050: "",
                //         rs025: "",
                //         rs010: "",
                //         rs005: "",
                //     },
                //     total: {
                //         rs200: "",
                //         rs100: "",
                //         rs50: "",
                //         rs20: "",
                //         rs10: "",
                //         rs5: "",
                //         rs2: "",
                //         rs1: "",
                //         rs050: "",
                //         rs025: "",
                //         rs010: "",
                //         rs005: "",
                //     },
                // },
            ],
        },
        getters: {

            valorAtual: state => {
                let resp = 0
                resp += isNaN(parseInt(state.RS200)) ? 0 : parseInt(state.RS200) * 200
                resp += isNaN(parseInt(state.RS100)) ? 0 : parseInt(state.RS100) * 100
                resp += isNaN(parseInt(state.RS50)) ? 0 : parseInt(state.RS50) * 50
                resp += isNaN(parseInt(state.RS20)) ? 0 : parseInt(state.RS20) * 20
                resp += isNaN(parseInt(state.RS10)) ? 0 : parseInt(state.RS10) * 10
                resp += isNaN(parseInt(state.RS5)) ? 0 : parseInt(state.RS5) * 5
                resp += isNaN(parseInt(state.RS2)) ? 0 : parseInt(state.RS2) * 2
                resp += isNaN(parseInt(state.RS1)) ? 0 : parseInt(state.RS1)
                resp += isNaN(parseInt(state.RS050)) ? 0 : parseInt(state.RS050) * 0.5
                resp += isNaN(parseInt(state.RS025)) ? 0 : parseInt(state.RS025) * 0.25
                resp += isNaN(parseInt(state.RS010)) ? 0 : parseInt(state.RS010) * 0.1
                resp += isNaN(parseInt(state.RS005)) ? 0 : parseInt(state.RS005) * 0.05

                return resp.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                })
            },

            // valorTotal: state => {
            //     let resp = 0
            //     resp += state.TRS200 * 200
            //     resp += state.TRS100 * 100
            //     resp += state.TRS50 * 50
            //     resp += state.TRS20 * 20
            //     resp += state.TRS10 * 10
            //     resp += state.TRS5 * 5
            //     resp += state.TRS2 * 2
            //     resp += state.TRS1
            //     resp += state.TRS050 * 0.5
            //     resp += state.TRS025 * 0.25
            //     resp += state.TRS010 * 0.1
            //     resp += state.TRS005 * 0.05
            //
            //     return resp.toLocaleString("pt-BR", {
            //         style: "currency",
            //         currency: "BRL",
            //     })
            // },
            valorTotal: state => (
                state.TRS200 * 200
                + state.TRS100 * 100
                + state.TRS50 * 50
                + state.TRS20 * 20
                + state.TRS10 * 10
                + state.TRS5 * 5
                + state.TRS2 * 2
                + state.TRS1
                + state.TRS050 * 0.5
                + state.TRS025 * 0.25
                + state.TRS010 * 0.1
                + state.TRS005 * 0.05).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
            }),

        ajeita: state => cedula => isNaN(parseInt(state[cedula])) ? 0 : parseInt(state[cedula]),

        // rs200: state => isNaN(parseInt(state.RS200)) ? 0 : parseInt(state.RS200) * 200,
        // rs100: state => isNaN(parseInt(state.RS100)) ? 0 : parseInt(state.RS100) * 100,
        // rs50: state => isNaN(parseInt(state.RS50)) ? 0 : parseInt(state.RS50) * 50,
        // rs20: state => isNaN(parseInt(state.RS20)) ? 0 : parseInt(state.RS20) * 20,
        // rs10: state => isNaN(parseInt(state.RS10)) ? 0 : parseInt(state.RS10) * 10,
        // rs5: state => isNaN(parseInt(state.RS5)) ? 0 : parseInt(state.RS5) * 5,
        // rs2: state => isNaN(parseInt(state.RS2)) ? 0 : parseInt(state.RS2) * 2,
        // rs1: state => isNaN(parseInt(state.RS1)) ? 0 : parseInt(state.RS1),
        // rs050: state => isNaN(parseInt(state.RS050)) ? 0 : parseInt(state.RS050) * 0.5,
        // rs025: state => isNaN(parseInt(state.RS025)) ? 0 : parseInt(state.RS025) * 0.25,
        // rs010: state => isNaN(parseInt(state.RS010)) ? 0 : parseInt(state.RS010) * 0.1,
        // rs005: state => isNaN(parseInt(state.RS005)) ? 0 : parseInt(state.RS005) * 0.05,
        //
        // trs200: state => isNaN(parseInt(state.TRS200)) ? 0 : parseInt(state.TRS200) * 200,
        // trs100: state => isNaN(parseInt(state.TRS100)) ? 0 : parseInt(state.TRS100) * 100,
        // trs50: state => isNaN(parseInt(state.TRS50)) ? 0 : parseInt(state.TRS50) * 50,
        // trs20: state => isNaN(parseInt(state.TRS20)) ? 0 : parseInt(state.TRS20) * 20,
        // trs10: state => isNaN(parseInt(state.TRS10)) ? 0 : parseInt(state.TRS10) * 10,
        // trs5: state => isNaN(parseInt(state.TRS5)) ? 0 : parseInt(state.TRS5) * 5,
        // trs2: state => isNaN(parseInt(state.TRS2)) ? 0 : parseInt(state.TRS2) * 2,
        // trs1: state => isNaN(parseInt(state.TRS1)) ? 0 : parseInt(state.TRS1),
        // trs050: state => isNaN(parseInt(state.TRS050)) ? 0 : parseInt(state.TRS050) * 0.5,
        // trs025: state => isNaN(parseInt(state.TRS025)) ? 0 : parseInt(state.TRS025) * 0.25,
        // trs010: state => isNaN(parseInt(state.TRS010)) ? 0 : parseInt(state.TRS010) * 0.1,
        // trs005: state => isNaN(parseInt(state.TRS005)) ? 0 : parseInt(state.TRS005) * 0.05,
    },
    mutations: {

    zerar(state){
        state.RS200 = state.RS100 = state.RS50 = state.RS20 = state.RS10 = state.RS5 = state.RS2 = state.RS1 = state.RS050 = state.RS025 = state.RS010 = state.RS005 = ""
    },
    zerarPerm(state){
        state.TRS200 = state.TRS100 = state.TRS50 = state.TRS20 = state.TRS10 = state.TRS5 = state.TRS2 = state.TRS1 = state.TRS050 = state.TRS025 = state.TRS010 = state.TRS005 = 0
    },
    perm(state){
        // localStorage.setItem("lstrs200", state.TRS200)
        // localStorage.setItem("lstrs100", state.TRS100)
        // localStorage.setItem("lstrs50", state.TRS50)
        // localStorage.setItem("lstrs20", state.TRS20)
        // localStorage.setItem("lstrs10", state.TRS10)
        // localStorage.setItem("lstrs5", state.TRS5)
        // localStorage.setItem("lstrs2", state.TRS2)
        // localStorage.setItem("lstrs1", state.TRS1)
        // localStorage.setItem("lstrs050", state.TRS050)
        // localStorage.setItem("lstrs025", state.TRS025)
        // localStorage.setItem("lstrs010", state.TRS010)
        // localStorage.setItem("lstrs005", state.TRS005)
        localStorage.setItem("arquivolocal", JSON.stringify(state))
    },
    registro(state, tipo /* recebe || dispensa */){
        state.history.unshift({
            tipo: tipo, /* string */
            datahora: new Date(),
            mov: {
                rs200: state.RS200,
                rs100: state.RS100,
                rs50: state.RS50,
                rs20: state.RS20,
                rs10: state.RS10,
                rs5: state.RS5,
                rs2: state.RS2,
                rs1: state.RS1,
                rs050: state.RS050,
                rs025: state.RS025,
                rs010: state.RS010,
                rs005: state.RS005,
            },
            total: {
                rs200: state.RS200,
                rs100: state.RS100,
                rs50: state.RS50,
                rs20: state.RS20,
                rs10: state.RS10,
                rs5: state.RS5,
                rs2: state.RS2,
                rs1: state.RS1,
                rs050: state.RS050,
                rs025: state.RS025,
                rs010: state.RS010,
                rs005: state.RS005,
            },
        })
    },
},
actions: {

    recebe({state, commit, getters})
    {

        state.TRS200 += getters.ajeita("RS200")
        state.TRS100 += getters.ajeita("RS100")
        state.TRS50 += getters.ajeita("RS50")
        state.TRS20 += getters.ajeita("RS20")
        state.TRS10 += getters.ajeita("RS10")
        state.TRS5 += getters.ajeita("RS5")
        state.TRS2 += getters.ajeita("RS2")
        state.TRS1 += getters.ajeita("RS1")
        state.TRS050 += getters.ajeita("RS050")
        state.TRS025 += getters.ajeita("RS025")
        state.TRS010 += getters.ajeita("RS010")
        state.TRS005 += getters.ajeita("RS005")

        commit('registro', 'recebe')
        commit('zerar')
        commit('perm')
    }
,
    dispensa({state, commit, getters})
    {

        state.TRS200 -= getters.ajeita("RS200")
        state.TRS100 -= getters.ajeita("RS100")
        state.TRS50 -= getters.ajeita("RS50")
        state.TRS20 -= getters.ajeita("RS20")
        state.TRS10 -= getters.ajeita("RS10")
        state.TRS5 -= getters.ajeita("RS5")
        state.TRS2 -= getters.ajeita("RS2")
        state.TRS1 -= getters.ajeita("RS1")
        state.TRS050 -= getters.ajeita("RS050")
        state.TRS025 -= getters.ajeita("RS025")
        state.TRS010 -= getters.ajeita("RS010")
        state.TRS005 -= getters.ajeita("RS005")

        commit('registro', 'dispensa')
        commit('zerar')
        commit('perm')
    }
,
    limpar({state, commit})
    {
        if (confirm("Tem certeza que quer apagar o histórico DEFINITIVAMENTE?")) {
            commit('zerarPerm')
            commit('zerar')
            state.history = []
            localStorage.clear()
        }
    }
,
    onstart({state})
    {
        // let num = ""
        // num = parseInt(localStorage.getItem("lstrs200"))
        // state.TRS200 = isNaN(num) ? 0 : num
        // num = parseInt(localStorage.getItem("lstrs100"))
        // state.TRS100 = isNaN(num) ? 0 : num
        // num = parseInt(localStorage.getItem("lstrs50"))
        // state.TRS50 = isNaN(num) ? 0 : num
        // num = parseInt(localStorage.getItem("lstrs20"))
        // state.TRS20 = isNaN(num) ? 0 : num
        // num = parseInt(localStorage.getItem("lstrs10"))
        // state.TRS10 = isNaN(num) ? 0 : num
        // num = parseInt(localStorage.getItem("lstrs5"))
        // state.TRS5 = isNaN(num) ? 0 : num
        // num = parseInt(localStorage.getItem("lstrs2"))
        // state.TRS2 = isNaN(num) ? 0 : num
        // num = parseInt(localStorage.getItem("lstrs1"))
        // state.TRS1 = isNaN(num) ? 0 : num
        // num = parseInt(localStorage.getItem("lstrs050"))
        // state.TRS050 = isNaN(num) ? 0 : num
        // num = parseInt(localStorage.getItem("lstrs025"))
        // state.TRS025 = isNaN(num) ? 0 : num
        // num = parseInt(localStorage.getItem("lstrs010"))
        // state.TRS010 = isNaN(num) ? 0 : num
        // num = parseInt(localStorage.getItem("lstrs005"))
        // state.TRS005 = isNaN(num) ? 0 : num
        let a = JSON.parse(localStorage.getItem("arquivolocal"))
        state.history = a.history
        state.TRS200 = a.TRS200
        state.TRS100 = a.TRS100
        state.TRS50 = a.TRS50
        state.TRS20 = a.TRS20
        state.TRS10 = a.TRS10
        state.TRS5 = a.TRS5
        state.TRS2 = a.TRS2
        state.TRS1 = a.TRS1
        state.TRS050 = a.TRS050
        state.TRS025 = a.TRS025
        state.TRS010 = a.TRS010
        state.TRS005 = a.TRS005
    }
,
}
,
modules: {
}
})
