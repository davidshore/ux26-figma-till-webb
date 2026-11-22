# Från Figma till webb

Bygg din första komponent på fotoworkshopens hemsida. Du får en fungerande sida med ett exempel att byta ut mot din egen design. Under **Admin** finns en plats för arrangörens vy.

## Starta din egen kopia

1. Installera [VS Code](https://code.visualstudio.com/download), [Git](https://git-scm.com/downloads) och [Node.js LTS](https://nodejs.org/en/download). Välj Node 24 LTS eller senare LTS. Öppna VS Code på nytt efter installationen.
2. Logga in på GitHub. Välj [Use this template → Create a new repository](https://github.com/new?template_name=ux26-figma-till-webb&template_owner=davidshore). Välj ditt konto som ägare och ge din kopia ett namn.
3. Öppna **din kopia** på GitHub. Välj **Code → HTTPS** och kopiera adressen. I VS Code, öppna kommandopaletten med **F1**, skriv **Git: Clone**, klistra in adressen, välj en mapp och klicka på **Open** när kopieringen är klar.
4. Välj **Terminal → New Terminal**. Terminalen är rutan där du skriver kommandon. Skriv första raden och tryck Enter. När den är klar, kör nästa rad.

```sh
npm ci
npm run dev
```

Öppna länken efter **Local** i terminalen. När du ser **Fotoworkshopen**, klicka på **Om workshopen** för att fälla ut texten. Låt terminalen vara öppen. Nästa gång räcker det att öppna projektmappen och köra `npm run dev`.

## Bygg ett kort från Figma

1. Öppna Copilot Chat i VS Code och logga in med ditt GitHub-konto. Du kan börja med Copilot Free och [ansöka om GitHub Education](https://github.com/settings/education/benefits).
2. Projektet innehåller Figma-anslutningen. Tryck **F1**, välj **MCP: List Servers → figma → Start Server**. Godkänn anslutningen och logga in med det Figma-konto som kan öppna din design när du får frågan.
3. Markera ditt kort i Figma och välj **Copy link to selection** i snabbmenyn. Öppna **Agent** i Copilot Chat. Byt ut hakparenteserna i exemplet mot dina länkar och din layoutregel.

> Läs kortet via Figma MCP. Mobil: [länk]. Dator: [länk]. Bygg min version av WorkshopCard så att den visas på hemsidan. På mobil ska [min layoutregel]. Använd projektets CSS och behåll möjligheten att prova lång text i Storybook. Berätta vilka filer du ändrade.

Jämför webbsidan med Figma. Dra fönstret från smalt till brett och kontrollera text, mellanrum och läsordning. Prova en egen ändring i CSS och spara. Om Figma inte kan läsas, kontrollera att båda länkarna öppnas med samma Figma-konto. Du kan också bifoga exporterade PNG-bilder av kortet och skriva din layoutregel.

## Hitta i projektet

| Det du vill ändra | Öppna |
| --- | --- |
| Kortets innehåll och struktur | `src/components/WorkshopCard.jsx` |
| Kortets layout | `src/components/WorkshopCard.css` |
| Gemensamma färger, textstorlekar och avstånd | `src/styles.css` |
| Hemsidan och adminsidan | `src/pages/Home.jsx` och `src/pages/Admin.jsx` |

## Prova kortet i Storybook

Öppna en **andra** terminal i samma mapp och kör `npm run storybook`. I Storybook väljer du **Komponenter → Workshopkort → Standard**. Ändra **Rubrik** i panelen **Controls**. Välj sedan **Lång rubrik i smal vy** och kontrollera radbrytningen. Under **Stilguide** ser du projektets färger och textroller. Ändra en färg i `src/styles.css`, spara och jämför kortet på webbsidan och i Storybook.

## Spara och publicera när du är redo

I VS Code, öppna **Source Control**, skriv vad du ändrat och välj **Commit**. Om VS Code frågar om filerna ska inkluderas, välj **Yes**. Välj **Sync Changes** för att skicka ändringen till din egen GitHub-kopia.

Logga in på [Vercel](https://vercel.com/new), importera din kopia och välj **Deploy** med förvalet **Vite**. Öppna den publicerade hemsidan och gå sedan direkt till `/admin` och ladda om. Lämna in hemsidans länk när båda vyerna är färdiga.
