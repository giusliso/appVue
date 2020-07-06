<template>
  <div>
    <div class = "content">
       <button class = "add-to-cart" @click="addToCart()">Add to Cart</button>
    </div>
    <div class="top-row">
      <div class = "robot-name">
        {{selectedRobot.head.title}}
        <span v-if = "selectedRobot.head.onSale" class="sale">Sale!</span>
      </div>
      <PartSelector :parts = "availableParts.heads" position = "head"
          @partSelected = "selectedPart => updatePart(selectedPart)"
          />
    </div>
    <div class="middle-row">
       <PartSelector :parts = "availableParts.arms" position = "left"
         @partSelected = "selectedPart => updatePart(selectedPart)"
         />
       <PartSelector :parts = "availableParts.torsos" position = "torse"
        @partSelected = "selectedPart => updatePart(selectedPart)"
        />
       <PartSelector :parts = "availableParts.arms" position = "right"
        @partSelected = "selectedPart => updatePart(selectedPart)"
        />
    </div>
    <div class="bottom-row">
       <PartSelector :parts = "availableParts.bases"  position = "base"
        @partSelected = "selectedPart => updatePart(selectedPart)"
        />
    </div>
    <div>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>
              Robot
            </th>
            <th class = "cost">
            Const
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(robot, index) in cart" :key= "index">
            <td>{{robot.head.title}}</td>
            <td>{{robot.cost}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import availableParts from './data/parts';
import PartSelector from './PartSelector.vue';

export default {
  name: 'RobotBuilder',
  components: { PartSelector },
  data() {
    return {
      cart: [],
      availableParts,
      selectedRobot: {
        head: {},
        left: {},
        right: {},
        torse: {},
        base: {}
      }
    };
  },
  computed: {
  },
  methods: {
    updatePart(selectedPart) {
      this.selectedRobot[selectedPart.position] = selectedPart.part;
    },
    addToCart() {
      const robot = this.selectedRobot;
      const cost = robot.head.cost + robot.left.cost
      + robot.right.cost + robot.torse.cost + robot.base.cost;
      this.cart = [...this.cart, { ...robot, cost }];
    }
    // updateIndex(index, position) {
    //   return index > 0 && position === 'prev' ? (index - 1) : (index + 1);
    // },
    // selectOther(part, position) {
    //   let index;
    //   switch (part) {
    //     case 'head':
    //       this.selectNextHeadIndex = this.updateIndex(this.selectNextHeadIndex, position);
    //       break;
    //     case 'left':
    //       this.selectNextLeftArmIndex = this.updateIndex(this.selectNextLeftArmIndex, position);
    //       break;
    //     case 'right':
    //       this.selectNextRightArmIndex =
    //        this.updateIndex(this.selectNextRightArmIndex, position);
    //       break;
    //     case 'base':
    //       this.selectNextBaseIndex = this.updateIndex(this.selectNextBaseIndex, position);
    //       break;
    //     case 'torse':
    //       this.selectNextTorseIndex = this.updateIndex(this.selectNextTorseIndex, position);
    //       break;
    //     default:
    //       break;
    //   }
    // }
  }
};
</script>

<style>
.part {
  position: relative;
  width: 165px;
  height: 165px;
  border: 3px solid #aaa;
}
.part img {
  width: 165px;
}
.top-row {
  display: flex;
  justify-content: space-around;
}
.middle-row {
  display: flex;
  justify-content: center;
}
.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector,
.center .next-selector {
  opacity: 0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.robot-name {
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}
.sale {
  color: red;
}
.content {
  position: relative;
}
.add-to-cart {
  position: absolute;
  right: 30px;
  width: 220px;
  padding: 10px;
}
</style>
