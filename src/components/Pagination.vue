<template>
    <ul class="pagination">
        <li :class="{active: itemPag == item}" v-for="item in pagItem" :key="item" @click="changePag(item)">{{item}}</li>
    </ul>
</template>

<script>
    import {mapActions, mapGetters, mapState} from 'vuex';

    export default {
        name: 'Pagination',
        data() {
            return {
                itemPag: 1,
            }
        },
        computed: {
            ...mapGetters([
                'PAGCOUNT',
            ]),
            pagItem() {
                let arr = [];

                for (let i = 1; i <= this.PAGCOUNT; i++) {
                    arr.push(i);
                }

                return arr;
            }
        },
        methods: {
            ...mapActions([
                'GET_LIST_FROM_API'
            ]),
            changePag(item) {
                console.log(item);
                this.itemPag = item;
                this.GET_LIST_FROM_API(item);
            }
        }
    }
</script>