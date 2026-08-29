# Modular Resume

The resume entrypoint is `../resume.tex`. Content is split into independent files under `sections/`:

- `header.tex`
- `summary.tex`
- `education.tex`
- `projects.tex`
- `skills.tex`
- `certifications.tex`
- `achievements.tex`

Compile from the project root with MiKTeX or another LaTeX distribution:

```bash
pdflatex -interaction=nonstopmode -halt-on-error -jobname=Mohammad_Saad_Resume -output-directory=resume resume.tex
```

The generated file is `resume/Mohammad_Saad_Resume.pdf`.
