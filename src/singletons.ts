import { computed, ref } from "vue";
import { router } from "./router";
const localId = ref('default')
export const currentId = computed({
    get() {
        return router.currentRoute.value.params.orgId || localId.value 
    },
    set(val) {
        localId.value = val
    }
})