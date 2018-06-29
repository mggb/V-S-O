<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use App\Repository\UserRepository;

class AccueilController extends Controller
{
    /**
     * @Route("/accueil", name="Oui_accueil", methods="GET")
     */
    public function index(UserRepository $userRepository): Response
    {
        return $this->render('accueil.html.twig', [
            'controller_name' => 'AccueilController',
            'title' => 'planete',
            'users' => $userRepository->findAll()
        ]);
    }
}
