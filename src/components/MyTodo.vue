<template>
    <div class="container">
        <div class="col-md-6 offset-md-3">
            <h1 class="text-center mb-4">My To Do Application</h1>
            <input type="text" class="form-control" v-model="userInput" @keyup.enter="addNewToDo">
            
            <div class="list-group">
                <template v-for="(todo,index) in todoList.filter(todo => this.currentState === 'all' || todo.state === this.currentState)">
                    <button :key="index" class="list-group-item text-left" @click="toggleTodoState(todo)">
                        {{ todo }}
                    </button> 
                </template>
            </div>

            <div>
                <button type="button" class="btn btn-sm" @click="changeCurrentState('active')">Acitve</button>
                <button type="button" class="btn btn-sm" @click="changeCurrentState('done')">Done</button>
                <button type="button" class="btn btn-sm" @click="changeCurrentState('all')">All</button>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            userInput : '',
            todoList : [],
            currentState : 'active'
        }   
    },
    methods : {
        addNewToDo(){
           if(this.userInput !== ''){
               this.todoList.push({
                   title : this.userInput,
                   state : 'active',
                   createdAt : Date.now()
               });
               this.userInput = '';
           }
        },
        toggleTodoState(todo){
            todo.state = todo.state === 'active' ? 'done' : 'active';
        },
        changeCurrentState(state){
            this.currentState = state;
        }
    }
}
</script>
