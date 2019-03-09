var app = new Vue({
  el: '#app',
  data: {
    list: [],
    notes: [],
    message: '',
    show: 'all',
    drag: {},
    addedNote: '',
    festive: false,
  },
  computed: {
    wishList() {
      return this.list;
    },
  },
  methods: {
    addItem() {
      this.list.push({text: this.message});
      this.message = '';
    },
    deleteItem(item) {
      var index = this.list.indexOf(item);
      if (index > -1)
      this.list.splice(index,1);
    },
    dragItem(item) {
      this.drag = item;
    },
    dropItem(item) {
      const indexItem = this.list.indexOf(this.drag);
      const indexTarget = this.list.indexOf(item);
      this.list.splice(indexItem,1);
      this.list.splice(indexTarget,0,this.drag);
    },
    addNote() {
      this.notes.push({
        text: this.addedNote,
        dateTime: moment().format('MMMM Do YYYY')
      });
      this.addedNote = '';
    },
    festiveOn(){
      this.festive = true;
    },
    festiveOff(){
      this.festive = false;
    },
  },
});
