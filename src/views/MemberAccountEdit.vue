<template>
  <div id="member-account-container">
    <Header />
    <main
      property="mainContentOfPage"
      resource="#wb-main"
      typeof="WebPageElement"
      class="container"
    >
      <h1 property="name" id="wb-cont" dir="ltr">Preferences</h1>
      <div>
        <div class="row mrgn-tp-lg mrgn-bttm-lg">
          <div class="col-xs-12">
            <button
              type="button"
              class="btn btn-primary min-width-100 margin-right-16"
              @click="save_edit_account()"
            >
              Save
            </button>
            <button
              type="button"
              class="btn btn-default min-width-100"
              @click="go_view_account()"
            >
              Cancel
            </button>
          </div>
        </div>
        <section>
          <h2>Communications</h2>
          <div class="row mrgn-bttm-lg">
            <div class="col-xs-12">
              <label for="phone-number-edit" class="mrgn-bttm-0"
                >Phone number:</label
              >
              <input
                id="phone-number-edit"
                type="tel"
                class="form-control input-fields"
                v-model="account.phone"
              />
            </div>
          </div>
          <div class="row mrgn-bttm-lg">
            <div class="col-xs-12">
              <label for="email-address-edit" class="mrgn-bttm-0"
                >Email address:</label
              >
              <input
                id="email-address-edit"
                type="email"
                class="form-control input-fields"
                v-model="account.email"
              />
            </div>
          </div>
          <div class="row mrgn-bttm-lg">
            <div class="col-xs-12">
              <label for="address-edit" class="mrgn-bttm-0"
                >Postal address:</label
              >
              <input
                id="address-edit"
                type="text"
                class="form-control input-fields"
                v-model="account.fullAddress"
              />
            </div>
          </div>
          <div class="row mrgn-bttm-lg">
            <div class="col-xs-12">
              <label for="preferred-language" class="mrgn-bttm-0"
                >Preferred language:</label
              >
              <div id="preferred-language">
                <div class="provisional gc-chckbxrdio">
                  <div class="row">
                    <div class="col-xs-6 col-xs-auto">Written:</div>
                    <div class="col-xs-6 col-xs-auto">
                      <ul class="list-unstyled lst-spcd-2">
                        <li class="radio">
                          <input
                            type="radio"
                            id="preferred-language-written-english"
                            name="preferred-language-written-selection"
                            value="English"
                            v-model="account.preferredLanguageWritten"
                          />
                          <label for="preferred-language-written-english"
                            >English</label
                          >
                        </li>
                        <li class="radio">
                          <input
                            type="radio"
                            id="preferred-language-written-french"
                            name="preferred-language-written-selection"
                            value="French"
                            v-model="account.preferredLanguageWritten"
                          />
                          <label for="preferred-language-written-french"
                            >French</label
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="provisional gc-chckbxrdio">
                  <div class="row">
                    <div class="col-xs-6 col-xs-auto">Spoken:</div>
                    <div class="col-xs-6 col-xs-auto">
                      <ul class="list-unstyled lst-spcd-2">
                        <li class="radio">
                          <input
                            type="radio"
                            id="preferred-language-spoken-english"
                            name="preferred-language-spoken-selection"
                            value="English"
                            v-model="account.preferredLanguageSpoken"
                          />
                          <label for="preferred-language-spoken-english"
                            >English</label
                          >
                        </li>
                        <li class="radio">
                          <input
                            type="radio"
                            id="preferred-language-spoken-french"
                            name="preferred-language-spoken-selection"
                            value="French"
                            v-model="account.preferredLanguageSpoken"
                          />
                          <label for="preferred-language-spoken-french"
                            >French</label
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mrgn-bttm-lg">
            <div class="col-xs-12">
              <label for="communications-preferences-edit" class="mrgn-bttm-0">
                Automated messages:
              </label>
              <div id="communications-preferences-edit">
                <div class="provisional gc-chckbxrdio">
                  <div class="row">
                    <div class="col-xs-6 col-xs-auto">Email notifications:</div>
                    <div class="col-xs-6 col-xs-auto">
                      <ul class="list-unstyled lst-spcd-2">
                        <li class="radio">
                          <input
                            type="radio"
                            id="communications-preferences-on"
                            name="communications-preferences-selection"
                            value="On"
                            v-model="account.emailNotifications"
                          />
                          <label for="communications-preferences-on"
                            >On (recommended)</label
                          >
                        </li>
                        <li class="radio">
                          <input
                            type="radio"
                            id="communications-preferences-off"
                            name="communications-preferences-selection"
                            value="Off"
                            v-model="account.emailNotifications"
                          />
                          <label for="communications-preferences-off"
                            >Off</label
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <i>
                    Note: Email notifications must be turned on to receive a
                    notification that there has been activity on your account.
                  </i>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="row">
          <div class="col-xs-12">
            <div class="row mrgn-tp-lg">
              <div class="col-xs-12">
                <button
                  type="button"
                  class="btn btn-primary min-width-100 margin-right-16"
                  @click="save_edit_account()"
                >
                  Save
                </button>
                <button
                  type="button"
                  class="btn btn-default min-width-100"
                  @click="go_view_account()"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/shared/Header.vue";
import Footer from "@/components/shared/Footer.vue";

export default {
  name: "member-account-edit",
  components: {
    Header,
    Footer,
  },
  computed: {
    account() {
      return {
        ...this.$store.state.account,
      };
    },
  },
  methods: {
    save_edit_account() {
      this.$store
        .dispatch("updateAccount", this.account)
        .then(() => {
          this.go_view_account();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    go_view_account() {
      this.$router.push({
        name: "MemberAccount",
      });
    },
  },
};
</script>

<style scoped>
.min-width-100 {
  min-width: 100px;
}

.margin-right-16 {
  margin-right: 16px;
}

.input-fields {
  width: 100%;
  max-width: 600px;
}
</style>
