<template>
    <div class="home">
        <div class="df-center search-block">
            <Search />
        </div>

        <table class="table table-hover">
            <thead class="table-dark">
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody class="t-body">
                <tr v-for="item in PACKAGES"
                    :key="item"
                    @click="showModal(item)">
                    <td>{{item.name}}</td>
                    <td>{{item.type}}</td>
                </tr>
            </tbody>
        </table>

        <div class="df-center pagination-block">
            <Pagination />
        </div>

        <transition name = "fade" appear>
            <div class="modal-overlay" v-if="isModal">
                <button class="exit-btn" @click="exitPopup"></button>
                <div class="modal">
                    <h2>Description</h2>
                    <div>
                        <span>Type: {{selectedItem.type}}</span>
                    </div>
                    <div>
                        <span>Name: {{selectedItem.name}}</span>
                    </div>
                    <div>
                        <span>Hits: {{selectedItem.hits}}</span>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import {mapActions, mapGetters, mapState} from 'vuex';
    import Search from './Search.vue';
    import Pagination from './Pagination.vue';

    export default {
        components: {
            Search,
            Pagination
        },
        data() {
            return {
                page: 1,
                isModal: false,
                selectedItem: null,
            }
        },
        computed: {
            ...mapGetters([
                'PACKAGES',
            ])
        },
        mounted() {
            this.GET_LIST_FROM_API(this.page);
        },
        methods: {
            ...mapActions([
                'GET_LIST_FROM_API'
            ]),
            showModal(item) {
                this.isModal = true;
                this.selectedItem = item;
            },
            exitPopup() {
                this.isModal = false;
                this.selectedItem = null;
            },
        }
    }
</script>