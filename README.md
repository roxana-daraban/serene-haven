# Serene Haven

Site prezentare pentru salonul **Serene Haven** — stil editorial / wellness, cu pagini pentru acasă, servicii și contact.

## Structură proiect

```
serene-haven/
├── frontend/          # aplicație React (Vite + TypeScript)
└── backend/           # (rezervat pentru viitor)
```

Dezvoltarea activă este în **`frontend/`**.

## Stack (frontend)

- **React 19** + **TypeScript**
- **Vite 8**
- **Tailwind CSS 4**
- **React Router** — navigare între pagini
- **Framer Motion** — animații
- **Lucide React** — iconuri

## Cerințe

- [Node.js](https://nodejs.org/) LTS (18+ recomandat)
- npm (vine cu Node)

## Pornire rapidă

```bash
cd frontend
npm install
npm run dev
```

Aplicația rulează de obicei la `http://localhost:5173` (Vite).

## Comenzi utile (în `frontend/`)

| Comandă           | Rol                                      |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Development cu HMR                       |
| `npm run build`   | Build producție în `frontend/dist/`      |
| `npm run preview` | Previzualizare build local               |
| `npm run lint`    | ESLint                                   |

## Pagini / rute

| Rută        | Descriere        |
| ----------- | ---------------- |
| `/`         | Acasă (Landing)  |
| `/services` | Servicii         |
| `/contact`  | Contact + formular |

Navbar unificat pe toate paginile; butoanele „Rezervă” duc la `/contact`.

## Variabile de mediu

Pentru integrări viitoare (API, analytics), folosește fișiere **`.env`** în `frontend/` — sunt ignorate de Git (vezi `frontend/.gitignore`). Poți adăuga un `.env.example` cu numele cheilor, fără valori secrete.

## Licență

Privat / uz intern — actualizează după politica proiectului.
