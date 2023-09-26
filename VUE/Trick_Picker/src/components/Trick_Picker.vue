<template>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <div class="trick_picker">

    <h2>{{ msg }}</h2>

    <br><br>

      <select name="category_id" @change="onChange($event)" class="form-control" id="type" style="text-align: center">
        <option selected disabled>--- Select Category ---</option>
      </select>

      <br><br>

      <h2>{{ trick }}</h2>

      <button id="generator" style="visibility: hidden" @click="generateNewTrick()">Pick a new trick</button>

  </div>
</template>

<script>
export default {
  name: "Trick_Picker",
  props: {
    msg: String
  },
  data() {
    return {
      trick: "",
      hostname: "http://localhost:3001/",
    };
  },

  mounted() {
    this.setTypes();
  },

  methods: {

    setTypes() {
      fetch(this.hostname + "getalltypes")
          .then((response) => response.json())
          .then((json) => {
            for (let i = 0; i < json.message.length; i++) {
              var typeSelection = document.getElementById("type");
              var type = document.createElement("option");

              type.text = json.message[i];
              typeSelection.add(type);
            }
          });
    },

    getSelectedType() {
      var selectType = document.querySelector('#type');
      return selectType.value;
    },

    generateNewTrick(){
      this.getTrick(this.getSelectedType());
    },

    getTrick(type) {
      fetch(this.hostname + "skate_tricks_by_type/" + type)
          .then((response) => response.json())
          .then((json) => {
            var trickNumber = Math.floor(Math.random() * json.message.length);
            this.trick = json.message[trickNumber].trick_name;
          });
    },

  showButton(){
    document.getElementById('generator').style.visibility = 'visible';
  },

    onChange(event) {
      this.getTrick(event.target.value);
      this.showButton();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style
    scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
