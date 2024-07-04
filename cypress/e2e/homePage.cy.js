describe("PostCard Component", () => {
  beforeEach(() => {
    // Testten önce uygulamayı ziyaret et
    cy.visit("https://aboutnil.vercel.app/"); // Uygulamanızın çalıştığı adresi girin

    // PostCard bileşenini render eden bir sayfaya git
    // Bu, component'in doğrudan bir sayfada render edilmesi için uygun bir yolu ifade eder
    // Örneğin, `/projects` sayfasında bu bileşeni render ediyorsanız:
    cy.visit("https://aboutnil.vercel.app/");
  });

  it("should display the image correctly", () => {
    // İlk PostCard bileşeninin resmini seç ve kontrol et
    cy.get(".project-card img")
      .first()
      .should("be.visible")
      .and(($img) => {
        // Resmin doğru yüklenip yüklenmediğini kontrol et
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });

  it("should navigate to the correct project page when clicked", () => {
    // İlk PostCard bileşenine tıkla
    cy.get(".project-card").first().click();

    // Doğru sayfaya yönlendirildiğini kontrol et
    cy.url().should("include", "/projects/");
  });

  it("should display the correct number of likes", () => {
    // İlk PostCard bileşenindeki beğeni sayısını kontrol et
    cy.get(".project-card").first().find("span").should("contain.text", "47"); // Örnek olarak 47 beğeni olduğunu varsaydım, doğru değeri girin
  });
});
