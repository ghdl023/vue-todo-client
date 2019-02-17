<template>
    <div class="container">
        <h2>Todo List</h2>
        <div class="input-group" style="margin-bottom:10px;">
            <input type="text" class="form-control" v-model="title" v-on:keyup.enter="createToDo(title)" placeholder="할일을 입력하세요">
            <span class="input-group-btn">
            <button class="btn btn-default" @click="createToDo(title)" type="button">추가</button>
            </span>
        </div>

        <ul class="list-group">
            <li :key="index" class="list-group-item" v-for="(todo, index) in todos">
                {{todo.title}}
            <div class="btn-group pull-right" style="font-size: 12px; line-height: 1;">
                <button type="button" lass="btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    더보기<span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                    <li><a href="#" @click="deleteToDo(index)">삭제</a></li>
                </ul>
            </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ToDoPage',
    data(){
        return {
           todos: [
            //    {
            //        title : '청소',
            //        completed : false,
            //        createdAt : Date.now()
            //    },
            //    {
            //        title : 'Vue.js 공부',
            //        completed : false,
            //        createdAt : Date.now()
            //    },
            //    {
            //        title : '밥 먹기',
            //        completed : false,
            //        createdAt : Date.now()
            //    },
            //    {
            //        title : '운동',
            //        completed : false,
            //        createdAt : Date.now()
            //    }
           ]
        };
    },
    mounted(){
        console.log("Component mounted.");
       
    },
    methods : {
        deleteToDo(index){
            this.todos.splice(index,1);
        },
        createToDo(title){
            if(title!== null){
                this.todos.push({
                    title,
                    completed:false,
                    createdAt : Date.now()
                });
                this.title = "";
            }
                
        }
      
    }

}
</script>
