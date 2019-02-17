<template>
    <div class="container">
        <div class="col-md-6 offset-md-3">
            <h1 class="text-center mb-4">To Do Application 2</h1>
            <input type="text" class="form-control" v-model="userInput" @keyup.enter="addNewToDo">
            
            <div class="list-group">
                <template v-for="(todo,index) in getFilterTodoList">
                    <TodoItem 
                        :key="index"
                        :title="todo.title"
                        @todoItemClick="toggleTodoState(todo)"
                    />
                    <!-- 
                    <button :key="index" class="list-group-item text-left" @click="toggleTodoState(todo)">
                        {{ todo.title }}
                    </button> 
                    -->
                </template>
            </div>

            <div class="text-right">
                <button type="button" class="btn btn-sm" @click="changeCurrentState('active')">Active</button>
                <button type="button" class="btn btn-sm" @click="changeCurrentState('done')">Done</button>
                <button type="button" class="btn btn-sm" @click="changeCurrentState('all')">All</button>
            </div>
        </div>
    </div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";
export default {
    name:'ToDoPage2',
    data(){
        return{
            userInput:'',
            todoList:[],
            currentState :'active'
        };
    },
    // method를 variable 처럼 사용할수있다.
    computed: {
        getFilterTodoList(){
            return this.todoList.filter(todo => this.currentState === 'all'  || todo.state === this.currentState);
        }
    },
    methods:{
        // Filter Button Click Event
        changeCurrentState(state){
            this.currentState = state;
        },
        addNewToDo(){
           if(this.userInput !== ''){
                this.todoList.push({
                    title: this.userInput,
                    state:'active',
                    createdAt:Date.now()
                });
                this.userInput = '';
           }
        },
        toggleTodoState(todo){
            todo.state = todo.state === 'active' ? 'done' : 'active'
        }
    },
    // import TodoItem from "@/components/TodoItem.vue";
    components : {
        TodoItem
    }
}
</script>
