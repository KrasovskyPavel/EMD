# Next.js Static SEO Landing

Проект переведен на Next.js (`App Router`) и настроен под полностью статическую генерацию.

## Запуск

```bash
npm install
npm run dev
```

Локально: [http://localhost:3000](http://localhost:3000)

## Прод-сборка (статический экспорт)

```bash
npm run build
```

Готовые статические файлы будут в директории `out/`.

## SEO что уже включено

- Metadata в `src/app/layout.tsx` (title, description, OG, Twitter, canonical)
- `robots.txt` через `src/app/robots.ts`
- `sitemap.xml` через `src/app/sitemap.ts`

## Важно перед деплоем

Обнови `siteUrl` в:
- `src/app/layout.tsx`
- `src/app/robots.ts`
- `src/app/sitemap.ts`
